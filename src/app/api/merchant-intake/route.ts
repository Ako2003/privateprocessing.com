// app/api/merchant-intake/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // needed for Buffer

// Put near the top of the file
const RECIPIENTS: string[] = (
    process.env.MAIL_TO_LIST ??
    "jake@compaytence.com, info@privateprocessing.com, michael@compaytence.com, jessica@compaytence.com, natasha@compaytence.com, lars@compaytence.com"
)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);


function createTransport() {
    const host = "smtp.gmail.com";
    const port = Number(587);
    const user = "info@wealthconsulting.com";
    const pass = "myvuxirdzxjdwplr";
    return nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
    });
}



const FIELD_LABELS: Record<string, string> = {
    email: "Email",
    firstName: "First Name",
    lastName: "Last Name",
    mobilePhone: "Mobile Phone",
    phone: "Phone",
    preferredComm: "Preferred Communication Methods",
    preferredLanguage: "Preferred Language",
    spokenWith: "Have you already spoken with",
    referral: "Referred by",
    companyName: "Company Name",
    address1: "Address Line 1",
    city: "City",
    region: "State / Province / Region",
    postal: "ZIP / Postal",
    country: "Country",
    website: "Website / URL",
    foundingYear: "Founding Year",
    annualRevenue: "Annual Revenue",
    employees: "Number of Employees",
    taxNumber: "Business Tax Number / EIN / VAT",
    description: "Description",
    shoppingCarts: "Shopping Carts used",
    paymentProviders: "Payment Providers",
    reserves: "Reserves / Holds",
};

function toDateStamp(d = new Date()) {
    return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

function asLine(label: string, value: unknown) {
    if (Array.isArray(value)) {
        return `${label}: ${value.join(", ")}`;
    }
    const v =
        value === undefined || value === null || value === ""
            ? "-"
            : String(value);
    return `${label}: ${v}`;
}

function escapeHtml(s: string) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function sanitizeFilename(s: string) {
    return s.replace(/[\\/:*?"<>|]+/g, "_").trim();
}

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const dataRaw = formData.get("data");
        if (typeof dataRaw !== "string") {
            return new NextResponse("Bad payload", { status: 400 });
        }
        const data = JSON.parse(dataRaw) as Record<string, any>;

        const firstName = String(data.firstName ?? "").trim();
        const lastName = String(data.lastName ?? "").trim();
        const company = String(data.companyName ?? "").trim();
        const date = toDateStamp();

        const personCompanyDate = sanitizeFilename(
            `${firstName} ${lastName} - ${company} - ${date}`
        );

        // Build a clean TEXT body (each input separately)
        const orderedKeys = [
            "email",
            "firstName",
            "lastName",
            "mobilePhone",
            "phone",
            "preferredComm",
            "preferredLanguage",
            "spokenWith",
            "referral",
            "companyName",
            "address1",
            "city",
            "region",
            "postal",
            "country",
            "website",
            "foundingYear",
            "annualRevenue",
            "employees",
            "taxNumber",
            "description",
            "shoppingCarts",
            "paymentProviders",
            "reserves",
        ];

        const textLines = orderedKeys.map((k) =>
            asLine(FIELD_LABELS[k] ?? k, data[k])
        );

        const textBody =
            `A new Merchant Intake form was submitted.\n\n` +
            textLines.join("\n") +
            `\n`;

        // HTML version (simple table)
        const rowsHtml = orderedKeys
            .map((k) => {
                const label = FIELD_LABELS[k] ?? k;
                const value = Array.isArray(data[k])
                    ? escapeHtml((data[k] as string[]).join(", "))
                    : escapeHtml(String(data[k] ?? "-"));
                const isLong = k === "description" || k === "reserves";
                return `
          <tr>
            <td style="padding:8px;border:1px solid #e5e7eb;font-weight:600;">${escapeHtml(
                    label
                )}</td>
            <td style="padding:8px;border:1px solid #e5e7eb;${
                    isLong ? "white-space:pre-wrap" : ""
                }">${value || "-"}</td>
          </tr>`;
            })
            .join("");

        const htmlBody = `
      <h2 style="font-family:system-ui,Segoe UI,Roboto">Merchant Intake Submission</h2>
      <p style="font-family:system-ui,Segoe UI,Roboto;margin:0 0 12px">
        You received a new intake form.
      </p>
      <table style="border-collapse:collapse;width:100%;font-family:system-ui,Segoe UI,Roboto;font-size:14px">
        ${rowsHtml}
      </table>
    `;

        // Attach uploaded files with custom names
        const fileSections = [
            "processingHistory",
            "businessLicense",
            "bankStatements",
            "shareholderIDs",
            "supplierAgreement",
        ] as const;

        const attachments: {
            filename: string;
            content: Buffer;
            contentType?: string;
        }[] = [];

        for (const section of fileSections) {
            const files = formData.getAll(section) as File[];
            for (const f of files) {
                const buf = Buffer.from(await f.arrayBuffer());
                const filename = sanitizeFilename(
                    `${personCompanyDate} - ${section} - ${f.name}`
                );
                attachments.push({
                    filename,
                    content: buf,
                    contentType: f.type || undefined,
                });
            }
        }

        // Send mail
        const transporter = createTransport();

        const from = process.env.MAIL_FROM || "Wealth Consulting <info@wealthconsulting.com>";
        const to = process.env.MAIL_TO || "akif@wealthconsulting.com";

        const subject =
            `New Merchant Intake — ${company || "Unknown Company"} (${date})`;

        await transporter.sendMail({
            from,                  // "Wealth Consulting <info@wealthconsulting.com>"
            to: RECIPIENTS,        // array is fine; Nodemailer also accepts comma-separated string
            subject,
            text: textBody,
            html: htmlBody,
            attachments,
        });


        return NextResponse.json({ ok: true });
    } catch (e: any) {
        console.error(e);
        return new NextResponse(e?.message ?? "Server error", { status: 500 });
    }
}
