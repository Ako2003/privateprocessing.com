// app/api/merchant-intake/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import {config} from "@/../config";

export const runtime = "nodejs";

// --- Recipients ---
const RECIPIENTS: string[] = (
    config.MAIL_TO_LIST??
    "jake@compaytence.com, info@privateprocessing.com, michael@compaytence.com, jessica@compaytence.com, natasha@compaytence.com, lars@compaytence.com"
)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

// --- Transport ---
function createTransport() {
    const host = config.SMTP_HOST!;
    const port = Number(config.SMTP_PORT || 587);
    const user = config.SMTP_USER; // info@wealthconsulting.com
    const pass = config.SMTP_PASS;
    return nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
    });
}

// --- Schema (server-side mirror of the form) ---
const IntakeSchema = z.object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    mobilePhone: z.string(),
    phone: z.string().optional(),
    preferredComm: z.array(z.string()),
    preferredLanguage: z.string(),
    spokenWith: z.string(),
    referral: z.string().optional().nullable(),
    companyName: z.string(),
    address1: z.string(),
    city: z.string(),
    region: z.string(),
    postal: z.string(),
    country: z.string(),
    website: z.string().optional().nullable(),
    foundingYear: z.string(), // we keep string to match client payload
    annualRevenue: z.string().optional().nullable(),
    employees: z.string().optional().nullable(),
    taxNumber: z.string(),
    description: z.string(),
    shoppingCarts: z.array(z.string()),
    paymentProviders: z.array(z.string()),
    reserves: z.string().optional().nullable(),
});
type IntakeData = z.infer<typeof IntakeSchema>;

// --- Labels for the email body ---
const FIELD_LABELS: Record<keyof IntakeData, string> = {
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

// --- Helpers ---
function toDateStamp(d = new Date()) {
    return d.toISOString().slice(0, 10); // YYYY-MM-DD
}
function asLine(label: string, value: unknown) {
    if (Array.isArray(value)) return `${label}: ${value.join(", ")}`;
    const v = value ?? "-";
    const s = typeof v === "string" && v.trim() === "" ? "-" : String(v);
    return `${label}: ${s}`;
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

        const parsed = IntakeSchema.safeParse(JSON.parse(dataRaw));
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Validation failed", issues: parsed.error.issues },
                { status: 400 }
            );
        }
        const data: IntakeData = parsed.data;

        const firstName = data.firstName?.trim() ?? "";
        const lastName = data.lastName?.trim() ?? "";
        const company = data.companyName?.trim() ?? "";
        const date = toDateStamp();
        const personCompanyDate = sanitizeFilename(
            `${firstName} ${lastName} - ${company} - ${date}`
        );

        // Build text + html bodies (each field separately)
        const orderedKeys = Object.keys(FIELD_LABELS) as (keyof IntakeData)[];
        const textLines = orderedKeys.map((k) => asLine(FIELD_LABELS[k], data[k]));
        const textBody =
            `A new Merchant Intake form was submitted.\n\n` +
            textLines.join("\n") +
            `\n`;

        const rowsHtml = orderedKeys
            .map((k) => {
                const label = FIELD_LABELS[k];
                const raw = data[k];
                const value = Array.isArray(raw)
                    ? escapeHtml(raw.join(", "))
                    : escapeHtml(String(raw ?? "-"));
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

        const attachments: Array<{
            filename: string;
            content: Buffer;
            contentType?: string;
        }> = [];

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

        const transporter = createTransport();
        const from =
            process.env.MAIL_FROM || "Wealth Consulting <info@wealthconsulting.com>";
        const subject = `New Merchant Intake — ${company || "Unknown Company"} (${date})`;

        await transporter.sendMail({
            from,
            to: RECIPIENTS, // multiple recipients
            subject,
            text: textBody,
            html: htmlBody,
            attachments,
        });

        return NextResponse.json({ ok: true });
    } catch (err: unknown) {
        const message =
            err instanceof Error ? err.message : "Server error";
        console.error(err);
        return new NextResponse(message, { status: 500 });
    }
}
