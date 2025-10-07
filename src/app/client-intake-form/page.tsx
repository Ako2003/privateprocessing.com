"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";

/* -------------------- options -------------------- */
const BIZ_SIMPLE = ["Own Brand", "Dropshipping", "3PL"] as const;
const MARKETS = ["US", "UK", "EU", "CA", "AU", "Other"] as const;
const VOLUME3 = ["Below $25K", "$25K–$100K", "$100K+"] as const;
const FULFILLMENTS = ["Own warehouse", "Dropship", "3PL"] as const;
const YESNO = ["Yes", "No"] as const;

/* -------------------- schema -------------------- */
const BasicSchema = z
    .object({
        // Basic Information
        companyName: z.string().min(1, "Required"),
        registeredCountry: z.string().min(1, "Required"),
        websiteUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
        contactName: z.string().min(1, "Required"),
        email: z.string().email("Invalid email"),
        whatsapp: z.string().min(6, "Enter a valid number"),

        // Business Overview
        typeOfBusiness: z.enum(BIZ_SIMPLE),
        mainProducts: z.string().min(1, "Required"),
        mainMarkets: z.array(z.enum(MARKETS)).min(1, "Select at least one"),
        otherMarket: z.string().optional(),
        monthlyVolume: z.enum(VOLUME3),
        aov: z.string().min(1, "Required"),
        currentProcessor: z.string().optional(),

        // Operational Info
        fulfillment: z.enum(FULFILLMENTS),
        chargebackRate: z.string().optional(),
        subscriptionsOrTrials: z.enum(YESNO),
        mainGoal: z.string().min(1, "Required"),

        // Additional Notes
        notes: z.string().optional(),
    })
    .refine(
        (data) => (data.mainMarkets.includes("Other") ? !!data.otherMarket?.trim() : true),
        { message: "Please specify the ‘Other’ market", path: ["otherMarket"] }
    );

type BasicValues = z.infer<typeof BasicSchema>;

/* -------------------- page -------------------- */
export default function ClientIntakeBasic() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
    } = useForm<BasicValues>({
        resolver: zodResolver(BasicSchema),
        defaultValues: {
            websiteUrl: "",
            typeOfBusiness: "Own Brand",
            monthlyVolume: "Below $25K",
            fulfillment: "Own warehouse",
            subscriptionsOrTrials: "No",
            mainMarkets: [],
        },
    });

    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const errorText = (name: keyof BasicValues) =>
        errors[name]?.message ? (
            <p className="text-sm text-red-600 mt-1">{String(errors[name]?.message)}</p>
        ) : null;

    const markets = watch("mainMarkets") || [];

    const onSubmit = async (values: BasicValues) => {
        const res = await fetch("/api/merchant-intake-v2", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });

        if (!res.ok) {
            let msg = "Something went wrong. Please try again.";
            try {
                const ct = res.headers.get("content-type") || "";
                if (ct.includes("application/json")) {
                    const j = await res.json();
                    msg = j.error || j.message || msg;
                } else {
                    msg = (await res.text()) || msg;
                }
            } catch {}
            setErrorMessage(msg);
            setIsErrorOpen(true);
            return;
        }

        reset();
        setIsSuccessOpen(true);
    };

    return (
        <div className="pt-25">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto max-w-3xl space-y-8 bg-white shadow-lg rounded-2xl p-8"
            >
                <h1 className="text-3xl font-bold text-gray-700">Client Intake</h1>

                {/* ---------- Basic Information ---------- */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800">Basic Information</h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company Name *</label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black" {...register("companyName")} />
                        {errorText("companyName")}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Registered Country *</label>
                            <input className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black" {...register("registeredCountry")} />
                            {errorText("registeredCountry")}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Website / Store URL</label>
                            <input className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black" placeholder="https://…" {...register("websiteUrl")} />
                            {errorText("websiteUrl")}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contact Person Name *</label>
                            <input className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black" {...register("contactName")} />
                            {errorText("contactName")}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                            <input type="email" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black" {...register("email")} />
                            {errorText("email")}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">WhatsApp Number *</label>
                            <input className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black" placeholder="+49 …" {...register("whatsapp")} />
                            {errorText("whatsapp")}
                        </div>
                    </div>
                </section>

                {/* ---------- Business Overview ---------- */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800">Business Overview</h2>

                    <div>
                        <p className="text-sm font-medium text-gray-700">Type of Business *</p>
                        <div className="mt-2 flex flex-wrap gap-4">
                            {BIZ_SIMPLE.map((t) => (
                                <label key={t} className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" value={t} {...register("typeOfBusiness")} />
                                    <span>{t}</span>
                                </label>
                            ))}
                        </div>
                        {errorText("typeOfBusiness")}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Main Products Sold *</label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black" {...register("mainProducts")} />
                        {errorText("mainProducts")}
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-700">Main Market(s) *</p>
                        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {MARKETS.map((m) => (
                                <label key={m} className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="checkbox" value={m} {...register("mainMarkets")} />
                                    <span>{m}</span>
                                </label>
                            ))}
                        </div>
                        {errorText("mainMarkets")}
                        {markets.includes("Other") ? (
                            <div className="mt-3">
                                <input
                                    className="w-full rounded-md border border-gray-300 p-2"
                                    placeholder="Specify other markets"
                                    {...register("otherMarket")}
                                />
                                {errorText("otherMarket")}
                            </div>
                        ) : null}
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-700">Monthly Volume (approx.) *</p>
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {VOLUME3.map((v) => (
                                <label key={v} className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" value={v} {...register("monthlyVolume")} />
                                    <span>{v}</span>
                                </label>
                            ))}
                        </div>
                        {errorText("monthlyVolume")}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Average Order Value *</label>
                            <input className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black" placeholder="$…" {...register("aov")} />
                            {errorText("aov")}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Current Payment Processor (if any)</label>
                            <input className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black" placeholder="Stripe, Checkout.com, …" {...register("currentProcessor")} />
                        </div>
                    </div>
                </section>

                {/* ---------- Operational Info ---------- */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800">Operational Info</h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">How are orders fulfilled? *</label>
                        <div className="mt-2 flex flex-wrap gap-6">
                            {FULFILLMENTS.map((f) => (
                                <label key={f} className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" value={f} {...register("fulfillment")} />
                                    <span>{f}</span>
                                </label>
                            ))}
                        </div>
                        {errorText("fulfillment")}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Chargeback rate (if known)</label>
                            <input className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black" placeholder="e.g., 0.5%" {...register("chargebackRate")} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Do you offer subscriptions or trials? *</p>
                            <div className="mt-2 flex gap-6">
                                {YESNO.map((v) => (
                                    <label key={v} className="inline-flex items-center gap-2 text-gray-700">
                                        <input type="radio" value={v} {...register("subscriptionsOrTrials")} />
                                        <span>{v}</span>
                                    </label>
                                ))}
                            </div>
                            {errorText("subscriptionsOrTrials")}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Main goal with new payment setup *
                        </label>
                        <input
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black"
                            placeholder="e.g., better rates, stability, approvals"
                            {...register("mainGoal")}
                        />
                        {errorText("mainGoal")}
                    </div>
                </section>

                {/* ---------- Additional Notes ---------- */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800">Additional Notes</h2>
                    <textarea
                        rows={3}
                        className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black "
                        placeholder="Anything else you’d like us to know before onboarding?"
                        {...register("notes")}
                    />
                </section>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-xl bg-black px-5 py-3 text-white disabled:opacity-60"
                >
                    {isSubmitting ? "Submitting…" : "Submit"}
                </button>

                <SuccessDialog open={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
                <ErrorDialog open={isErrorOpen} message={errorMessage} onClose={() => setIsErrorOpen(false)} />
            </form>
        </div>
    );
}

/* -------------------- Dialogs (same UX) -------------------- */
function SuccessDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [mounted, setMounted] = useState(false);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => setMounted(true), []);
    useEffect(() => {
        if (open && mounted) {
            closeBtnRef.current?.focus();
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = prev;
            };
        }
    }, [open, mounted]);

    if (!open) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="intake-success-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onKeyDown={(e) => e.key === "Escape" && onClose()}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
                <div className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="m22 4-10 10-3-3" />
                        </svg>
                    </div>
                    <h2 id="intake-success-title" className="text-xl font-semibold text-gray-900">
                        Submission received 🎉
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Thanks! Your basic intake was submitted successfully.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-3">
                        <button
                            ref={closeBtnRef}
                            onClick={onClose}
                            className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ErrorDialog({
                         open,
                         message,
                         onClose,
                     }: {
    open: boolean;
    message?: string;
    onClose: () => void;
}) {
    const [mounted, setMounted] = useState(false);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => setMounted(true), []);
    useEffect(() => {
        if (open && mounted) {
            closeBtnRef.current?.focus();
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = prev;
            };
        }
    }, [open, mounted]);

    if (!open) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="intake-error-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onKeyDown={(e) => e.key === "Escape" && onClose()}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
                <div className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M15 9l-6 6M9 9l6 6" />
                        </svg>
                    </div>
                    <h2 id="intake-error-title" className="text-xl font-semibold text-gray-900">
                        Submission failed
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        We couldn’t submit your form. Please review the details and try again.
                    </p>
                    {message ? (
                        <pre className="mt-3 max-h-40 overflow-auto whitespace-pre-wrap rounded-lg border border-red-100 bg-red-50 p-3 text-left text-sm text-red-700">
              {message}
            </pre>
                    ) : null}
                    <div className="mt-6 flex items-center justify-center gap-3">
                        <button
                            ref={closeBtnRef}
                            onClick={onClose}
                            className="inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
