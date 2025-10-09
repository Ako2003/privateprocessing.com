// app/api/merchant-intake-v2/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

// ---- keep the server schema in sync with the client ----
const BIZ_SIMPLE = ["Own Brand", "Dropshipping", "3PL"] as const;
const MARKETS = ["US", "UK", "EU", "CA", "AU", "Other"] as const;
const VOLUME3 = ["Below $25K", "$25K–$100K", "$100K+"] as const;
const FULFILLMENTS = ["Own warehouse", "Dropship", "3PL"] as const;
const YESNO = ["Yes", "No"] as const;

const BasicSchema = z
    .object({
        companyName: z.string().min(1, "Required"),
        registeredCountry: z.string().min(1, "Required"),
        websiteUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
        contactName: z.string().min(1, "Required"),
        email: z.string().email("Invalid email"),
        whatsapp: z.string().min(6, "Enter a valid number"),

        typeOfBusiness: z.enum(BIZ_SIMPLE),
        mainProducts: z.string().min(1, "Required"),
        mainMarkets: z.array(z.enum(MARKETS)).min(1, "Select at least one"),
        otherMarket: z.string().optional(),
        monthlyVolume: z.enum(VOLUME3),
        aov: z.string().min(1, "Required"),
        currentProcessor: z.string().optional(),

        fulfillment: z.enum(FULFILLMENTS),
        chargebackRate: z.string().optional(),
        subscriptionsOrTrials: z.enum(YESNO),
        mainGoal: z.string().min(1, "Required"),

        notes: z.string().optional(),
    })
    .refine(
        (data) =>
            data.mainMarkets.includes("Other") ? !!data.otherMarket?.trim() : true,
        { message: "Please specify the ‘Other’ market", path: ["otherMarket"] }
    );

// Optional: run on Node runtime (Edge also works, but Node gives AbortController by default)
export const runtime = "nodejs";

export async function POST(req: Request) {
    // 1) Parse & validate
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const parsed = BasicSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            {
                error: "Validation failed",
                details: parsed.error.flatten(),
            },
            { status: 400 }
        );
    }

    // 2) Prepare metadata (handy in Zapier)
    const forwardedFor = req.headers.get("x-forwarded-for") ?? "";
    const ip = forwardedFor.split(",")[0]?.trim() || null;
    const userAgent = req.headers.get("user-agent") || null;

    // 3) Forward to Zapier (keep URL secret in env)
    const url = "https://hooks.zapier.com/hooks/catch/21494223/u52268m/";
    if (!url) {
        return NextResponse.json(
            { error: "Server not configured (missing ZAPIER_WEBHOOK_URL)" },
            { status: 500 }
        );
    }

    // Abort if Zapier hangs
    const ac = new AbortController();
    const timeout = setTimeout(() => ac.abort(), 12_000);

    try {
        const zapRes = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // You can send exactly the form payload, or map/rename fields for Zapier steps
            body: JSON.stringify({
                ...parsed.data,
                submittedAt: new Date().toISOString(),
                ip,
                userAgent,
                // Example: normalized fields for Zap steps
                marketsCSV: parsed.data.mainMarkets.join(", "),
            }),
            signal: ac.signal,
        });
        clearTimeout(timeout);

        if (!zapRes.ok) {
            const text = await zapRes.text().catch(() => "");
            return NextResponse.json(
                {
                    error: `Zapier webhook failed (${zapRes.status})`,
                    message: text || "Upstream error",
                },
                { status: 502 }
            );
        }

        // 4) Respond to the client
        return NextResponse.json({ ok: true });
    } catch (err: any) {
        clearTimeout(timeout);
        const msg =
            err?.name === "AbortError"
                ? "Timed out sending to Zapier"
                : err?.message || "Unknown error";
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}
