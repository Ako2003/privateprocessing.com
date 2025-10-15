// app/api/merchant-intake-v2/route.ts
import { NextResponse } from "next/server";
import { BasicSchema } from "@/schema";


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
    const url = process.env.ZAPIER_WEBHOOK_URL
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
