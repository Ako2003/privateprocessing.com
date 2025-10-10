// app/api/merchant-intake-v2/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import {
    BIZ_SIMPLE,
    INDUSTRY,
    YESNO,
    ISSUE_VALUES,
    FIX_VALUES,
    PRIORITY_VALUES,
} from "@/lib/options";

/* -------------------- Issues -------------------- */
const IssueType = z.enum(ISSUE_VALUES);
const IssueItemSchema = z.object({
    type: IssueType,
    details: z.string().min(1, "Please add a short note"),
});

const IssuesSchema = z
    .array(IssueItemSchema)
    .min(1, "Select at least one issue")
    .superRefine((items, ctx) => {
        const seen = new Set<string>();
        items.forEach((it, idx) => {
            if (seen.has(it.type)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: [idx, "type"],
                    message: "Duplicate selection",
                });
            } else {
                seen.add(it.type);
            }
        });
    });

/* -------------------- Priorities / Fixes -------------------- */
const PriorityEnum = z.enum(PRIORITY_VALUES);
const FixEnum = z.enum(FIX_VALUES);

const PrioritiesSchema = z
    .array(PriorityEnum)
    .min(1, "Select at least one priority")
    .superRefine((arr, ctx) => {
        const s = new Set(arr);
        if (s.size !== arr.length) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Duplicate selection" });
        }
    });

const FixesSchema = z
    .array(FixEnum)
    .min(1, "Select at least one item to improve")
    .superRefine((arr, ctx) => {
        const s = new Set(arr);
        if (s.size !== arr.length) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Duplicate selection" });
        }
    });

/* -------------------- Main schema -------------------- */
const BasicSchema = z
    .object({
        // Basic Information
        companyName: z.string().min(1, "Required"),
        registeredCountry: z.string().min(1, "Required"),
        websiteUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
        contactName: z.string().min(1, "Required"),
        contactRole: z.string().min(1, "Required"),
        email: z.string().email("Invalid email"),
        whatsapp: z.string().min(6, "Enter a valid number"),
        taxResident: z.string().min(1, "Required"),

        // Business Overview
        industry: z.enum(INDUSTRY),
        otherIndustry: z.string().optional(),

        typeOfBusiness: z.enum(BIZ_SIMPLE),
        otherTypeOfBusiness: z.string().optional(),

        inventory: z.string().min(1, "Required"),
        supplierLocation: z.string().min(1, "Required"),
        deliveryTime: z.string().min(1, "Required"),
        trackingCode: z.string().min(1, "Required"),
        sellingRegions: z.string().min(1, "Required"),
        currencies: z.string().min(1, "Required"),
        marketingChannels: z.string().min(1, "Required"),
        platform: z.string().min(1, "Required"),
        currentProcessor: z.string().min(1, "Required"),
        processingVolume: z.string().min(1, "Required"),
        productPrice: z.string().min(1, "Required"),
        chargebackRate: z.string().min(1, "Required"),
        chargebackTool: z.string().min(1, "Required"),
        previousProcessors: z.string().optional(),
        itin: z.enum(["yes", "no"]),

        // Dynamic, validated arrays
        issues: IssuesSchema,
        paymentMethods: z.string().min(1, "Required"),
        priorities: PrioritiesSchema,
        fixImprovements: FixesSchema,

        // Policies / compliance
        regulatedProducts: z.string().optional(),
        refundPolicyUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
        returnPolicyUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
        privacyPolicyUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
        shippingPolicyUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
        siteShowsFullContact: z.enum(YESNO),

        // Additional Notes
        notes: z.string().optional(),
    })
    .refine(
        (data) => (data.industry === "Other" ? !!data.otherIndustry?.trim() : true),
        { message: "Please specify your industry", path: ["otherIndustry"] }
    )
    .refine(
        (data) => (data.typeOfBusiness === "Other" ? !!data.otherTypeOfBusiness?.trim() : true),
        { message: "Please specify your business type", path: ["otherTypeOfBusiness"] }
    );

export const runtime = "nodejs";

/* -------------------- Route handler -------------------- */
export async function POST(req: Request) {
    // 1) Parse JSON
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    // 2) Validate
    const parsed = BasicSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            {
                error: "Validation failed",
                details: parsed.error.flatten(), // { fieldErrors, formErrors }
            },
            { status: 400 }
        );
    }

    // 3) Meta
    const forwardedFor = req.headers.get("x-forwarded-for") ?? "";
    const ip = forwardedFor.split(",")[0]?.trim() || null;
    const userAgent = req.headers.get("user-agent") || null;

    // 4) Upstream webhook (Zapier, Make, your backend, etc.)
    const url = process.env.ZAPIER_WEBHOOK_URL; // set in your env
    if (!url) {
        return NextResponse.json(
            { error: "Server not configured (missing ZAPIER_WEBHOOK_URL)" },
            { status: 500 }
        );
    }

    // Abort if upstream hangs
    const ac = new AbortController();
    const timeout = setTimeout(() => ac.abort(), 12_000);

    try {
        const zapRes = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            signal: ac.signal,
            body: JSON.stringify({
                ...parsed.data,
                submittedAt: new Date().toISOString(),
                ip,
                userAgent,
            }),
        });

        clearTimeout(timeout);

        if (!zapRes.ok) {
            const text = await zapRes.text().catch(() => "");
            return NextResponse.json(
                {
                    error: `Upstream webhook failed (${zapRes.status})`,
                    message: text || "Upstream error",
                },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (err: unknown) {
        clearTimeout(timeout);

        let msg = "Unknown error";
        if (err instanceof Error) {
            msg = err.name === "AbortError" ? "Timed out sending to webhook" : err.message || msg;
        }

        return NextResponse.json({ error: msg }, { status: 500 });
    }
}
