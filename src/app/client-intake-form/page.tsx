"use client";

import {useForm, useFieldArray, FieldErrors} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import CustomTextButton from "@/components/CustomTextButton";
import { BasicSchema, BasicValues } from "@/schema";
import {
    BIZ_SIMPLE,
    INDUSTRY,
    ISSUES,
    PRIORITY_OPTS,
    FIX_OPTS,
} from "@/lib/options";
import {useRouter} from "next/navigation";


/* -------------------- page -------------------- */
export default function ClientIntakeBasic() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
        control
    } = useForm<BasicValues>({
        resolver: zodResolver(BasicSchema),
        defaultValues: {
            websiteUrl: "",
            typeOfBusiness: "",
            industry: "",
            issues: [],
            priorities: [],
            fixImprovements: [],
            regulatedProducts: "",
            refundPolicyUrl: "",
            returnPolicyUrl: "",
            privacyPolicyUrl: "",
            shippingPolicyUrl: "",
            siteShowsFullContact: "",
            otherPriority: "",
            otherFixImprovements: "",
        },
    });

    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const router = useRouter();

    const errorText = (name: keyof BasicValues) =>
        errors[name]?.message ? (
            <p className="text-sm text-red-600 mt-1">{String(errors[name]?.message)}</p>
        ) : null;

    const selected = watch("issues") || [];

    const isSelected = (type: string) =>
        (selected as { type: string; details: string }[]).some((i) => i.type === type);

    const indexOf = (type: string) =>
        (selected as { type: string; details: string }[]).findIndex((i) => i.type === type);

    const { append, remove } = useFieldArray({
        control,
        name: "issues",
    });


    const onSubmit = async (values: BasicValues) => {
        console.log("I am here")
        const res = await fetch("/api/client-intake", {
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
        await router.push("/client-intake-form/thank-you");
    };

    function errorAt(path: string) {
        const parts = path.split(".");
        let cur: FieldErrors | undefined = errors;
        for (const p of parts) {
            if (!cur) break;
            cur = (cur as Record<string, unknown>)[p] as FieldErrors | undefined;
        }
        const msg = (cur as { message?: unknown })?.message;
        return msg ? <p className="text-sm text-red-600 mt-1">{String(msg)}</p> : null;
    }

    return (
        <div className="bg-[#040404] pt-30">
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2
               max-w-[1275px] h-[1621px] -z-0 w-full max-lg:top-0
               [background:radial-gradient(59.14%_50.08%_at_50%_49.92%,rgba(192,160,109,0.6)_0%,rgba(0,0,0,0)_94.28%)]
               blur-[2px]"
                />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative mx-auto max-w-[800px] w-11/12 space-y-8 border bg-[#0B0B0B] border-[#292929] shadow-lg rounded-2xl lg:p-15 p-8"
            >
                <div className=" relative z-10">
                    <h1 className="lg:!text-[44px] !text-[36px] mb-5 !leading-10"><span
                        className="text-gold font-semibold">Client Intake</span> Form</h1>
                    <p className="text-lg font-intel leading-6 max-w-[500px]">Fill in your business details below so our
                        team can review and
                        prepare your onboarding.</p>

                    {/* ---------- Basic Information ---------- */}
                    <section className="space-y-4 mt-10">
                        <h2 className="!text-[26px] font-semibold text-white">Basic Information</h2>

                        <div>
                            <label className="block text-base font-light text-[#F1EEEE]">Company Name *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none" {...register("companyName")} />
                            {errorText("companyName")}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">Registered Country
                                    *</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                    placeholder="e.g. US LLC, UK Ltd, etc." {...register("registeredCountry")} />
                                {errorText("registeredCountry")}
                            </div>
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">Website / Store URL</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                    placeholder="https://…" {...register("websiteUrl")} />
                                {errorText("websiteUrl")}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">Contact Person Name
                                    *</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none" {...register("contactName")} />
                                {errorText("contactName")}
                            </div>
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">Contact Person Role
                                    *</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none" {...register("contactRole")} />
                                {errorText("contactRole")}
                            </div>
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">Email Address *</label>
                                <input type="email"
                                       className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none" {...register("email")} />
                                {errorText("email")}
                            </div>
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">WhatsApp Number *</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                    placeholder="+49 …" {...register("whatsapp")} />
                                {errorText("whatsapp")}
                            </div>
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">In which country are you a
                                    tax resident? *</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                    placeholder="e.g. United Kingdom, France, United States"
                                    {...register("taxResident")} />
                                {errorText("taxResident")}
                            </div>
                        </div>
                    </section>

                    <hr className="border-[#292929]/60 my-10"/>

                    {/* ---------- Business Overview ---------- */}
                    <section className="space-y-4 mt-10">
                        <h2 className="!text-[26px] font-semibold text-white">Business Overview</h2>

                        {/* Industry (with "Other") */}
                        <div className="mt-5">
                            <label className="block text-base font-light text-[#F1EEEE]">Industry *</label>
                            <select
                                {...register("industry")}
                                className="mt-1 w-full rounded-md border border-[#292929] bg-[#111111] p-2 text-[14px] text-[#F1EEEE] focus:outline-none"
                            >
                                <option value={""}>Select an option</option>
                                {INDUSTRY.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                            {errorText("industry")}

                            {/* Show text input when industry === "Other" */}
                            {watch("industry") === "Other" && (
                                <div className="mt-3">
                                    <input
                                        {...register("otherIndustry")}
                                        placeholder="Please specify your industry"
                                        className="mt-1 w-full rounded-md border border-[#292929] bg-[#111111] p-2 text-[14px] text-[#F1EEEE] focus:outline-none"
                                    />
                                    {errorText("otherIndustry")}
                                </div>
                            )}
                        </div>

                        {/* Type of Business */}
                        <div className="mt-5">
                            <p className="text-base font-light text-[#F1EEEE]">Type of Business *</p>
                            <div className="mt-2 flex flex-wrap gap-4">
                                {BIZ_SIMPLE.map((t) => (
                                    <label key={t}
                                           className="inline-flex items-center gap-2 text-[#F1EEEE] text-[14px]">
                                        <input
                                            type="radio"
                                            value={t}
                                            {...register("typeOfBusiness")}
                                            className="accent-[#D5B27B]"
                                        />
                                        <span>{t}</span>
                                    </label>
                                ))}
                            </div>
                            {errorText("typeOfBusiness")}
                            {watch("typeOfBusiness") === "Other" && (
                                <div className="mt-3">
                                    <input
                                        {...register("otherTypeOfBusiness")}
                                        placeholder="Please specify your type of business"
                                        className="mt-1 w-full rounded-md border border-[#292929] bg-[#111111] p-2 text-[14px] text-[#F1EEEE] focus:outline-none"
                                    />
                                    {errorText("otherTypeOfBusiness")}
                                </div>
                            )}
                        </div>


                        {/* Inventory */}
                        <div className="mt-5">
                            <label className="block text-base font-light text-[#F1EEEE]">Do you hold inventory?
                                *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder=""
                                {...register("inventory")}
                            />
                            <p className="text-white/60 text-xs mt-1.5">If YES, please specify the location(s) of your
                                warehouse or fulfillment center.</p>
                            {errorText("inventory")}
                        </div>

                        {/* Location */}
                        <div className="mt-5">
                            <label className="block text-base font-light text-[#F1EEEE]">Location / Country of Main
                                Supplier *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder=""
                                {...register("supplierLocation")}
                            />
                            {errorText("supplierLocation")}
                        </div>

                        {/* Average Delivery or Shipping Time */}
                        <div className="mt-5">
                            <label className="block text-base font-light text-[#F1EEEE]">Average Delivery or Shipping
                                Time *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder=""
                                {...register("deliveryTime")}
                            />
                            {errorText("deliveryTime")}
                            <p className="text-white/60 text-xs mt-1.5">From order placed to product received.</p>
                        </div>

                        {/* Tracking code */}
                        <div className="mt-5">
                            <label className="block text-base font-light text-[#F1EEEE]">Do you provide tracking code?
                                *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder=""
                                {...register("trackingCode")}
                            />
                            {errorText("trackingCode")}
                        </div>

                        {/* Selling Regions */}
                        <div className="mt-5">
                            <label className="block text-base font-light text-[#F1EEEE]">Selling Regions *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder="e.g. US 50%, UK 30%, EU 20%"
                                {...register("sellingRegions")}
                            />
                            {errorText("sellingRegions")}
                        </div>

                        {/* Currencies Accepted */}
                        <div className="mt-5">
                            <label className="block text-base font-light text-[#F1EEEE]">Currencies Accepted *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder="e.g. USD, EUR, GBP, AUD, etc."
                                {...register("currencies")}
                            />
                            {errorText("currencies")}
                        </div>

                        {/* Marketing Channels Used */}
                        <div className="mt-5">
                            <label className="block text-base font-light text-[#F1EEEE]">Marketing Channels In Use
                                *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder="e.g. Facebook Ads, TikTok Ads, Google Ads, SEO, affiliates, etc"
                                {...register("marketingChannels")}
                            />
                            {errorText("marketingChannels")}
                        </div>

                        {/* Platform */}
                        <div className="mt-5">
                            <label className="block text-base font-light text-[#F1EEEE]">Platform In Use *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder="e.g. Shopify, WooCommerce, Magento, Custom, etc"
                                {...register("platform")}
                            />
                            {errorText("platform")}
                        </div>

                    </section>


                    <hr className="border-[#292929]/60 my-10"/>

                    {/* ---------- Current Payment Setup ---------- */}
                    <section className="space-y-4 mt-10">
                        <h2 className="!text-[26px] font-semibold text-white">Current Payment Setup</h2>

                        {/* Payment Processor */}
                        <div>
                            <label className="block text-base font-light text-[#F1EEEE]">
                                Current Payment Processor(s) *
                            </label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder="e.g. Stripe, Shopify Payments, PayPal, Payoneer, etc"
                                {...register("currentProcessor")}
                            />
                            {errorText("currentProcessor")}
                        </div>

                        {/* Processing Volume */}
                        <div>
                            <label className="block text-base font-light text-[#F1EEEE]">Current Monthly Processing
                                Volume (average of last 3 months) *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder=""
                                {...register("processingVolume")}
                            />
                            {errorText("processingVolume")}
                        </div>

                        {/* Product Price */}
                        <div>
                            <label className="block text-base font-light text-[#F1EEEE]">Average products price
                                *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder=""
                                {...register("productPrice")}
                            />
                            {errorText("productPrice")}
                        </div>

                        {/* Chargeback Rate */}
                        <div>
                            <label className="block text-base font-light text-[#F1EEEE]">Chargeback Rate (% average of
                                last 3 months) *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder=""
                                {...register("chargebackRate")}
                            />
                            {errorText("chargebackRate")}
                        </div>

                        {/* Chargeback Tool */}
                        <div>
                            <label className="block text-base font-light text-[#F1EEEE]">Chargeback migration tools in
                                use *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder="Ethoca, Verifi, etc."
                                {...register("chargebackTool")}
                            />
                            {errorText("chargebackTool")}
                        </div>

                        {/* Previous processors used */}
                        <div>
                            <label className="block text-base font-light text-[#F1EEEE]">Previous processors used (if
                                any)</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder="Stripe, Shopify Payments, Checkout.com, etc."
                                {...register("previousProcessors")}
                            />
                            {errorText("previousProcessors")}
                        </div>

                        <div>
                            <label className="block text-base font-light text-[#F1EEEE]">Do you have an ITIN Number?
                                (Individual Taxpayer Identification Number in the US) *</label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder="Yes / No / In Process"
                                {...register("itin")}
                            />
                            {errorText("itin")}
                        </div>


                        {/* Issues*/}
                        <div className="mt-5">
                            <p className="text-base font-light text-[#F1EEEE]">
                                Main Issues or Pain Points (select all that apply) *
                            </p>

                            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                                {ISSUES.map((opt) => {
                                    const checked = isSelected(opt.value);
                                    const idx = indexOf(opt.value);

                                    return (
                                        <div
                                            key={opt.value}
                                            className={`rounded-xl border ${
                                                checked ? "border-[#D5B27B]/60 bg-[#171717]" : "border-[#292929] bg-[#111111]"
                                            } p-4 transition-colors`}
                                        >
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="mt-1 accent-[#D5B27B]"
                                                    checked={checked}
                                                    onChange={(e) => {
                                                        if (e.target.checked) append({type: opt.value, details: ""});
                                                        else {
                                                            const toRemove = indexOf(opt.value);
                                                            if (toRemove > -1) remove(toRemove);
                                                        }
                                                    }}
                                                />
                                                <span
                                                    className="text-[#F1EEEE] text-[14px] leading-6">{opt.label}</span>
                                            </label>

                                            {/* Per-item errors (duplicates, details required) */}
                                            {checked && idx > -1 && (
                                                <div className="mt-3 pl-7">
                                                    <label className="block text-[13px] font-light text-[#F1EEEE]/80">
                                                        {opt.prompt}
                                                    </label>
                                                    <input
                                                        className="mt-1 w-full rounded-md border border-[#292929] bg-[#0C0C0C] p-2 text-[14px] text-[#F1EEEE] focus:outline-none"
                                                        placeholder="Type here…"
                                                        {...register(`issues.${idx}.details` as const)}
                                                    />
                                                    {errorAt(`issues.${idx}.details`)}
                                                    {errorAt(`issues.${idx}.type`)} {/* shows duplicate-type error from superRefine */}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Group-level error: "Select at least one issue" */}
                            {errorAt("issues")}
                        </div>

                        {/* Payment methods */}
                        <div>
                            <label className="block text-base font-light text-[#F1EEEE]">Alternative payment methods that are important for growth* </label>
                            <input
                                className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                placeholder="Apple Pay, Google Pay, Buy Now Pay Later, Paypal, etc."
                                {...register("paymentMethods")}
                            />
                            {errorText("paymentMethods")}
                        </div>
                    </section>


                    <hr className="border-[#292929]/60 my-10"/>

                    {/* ---------- What You Are Looking For ---------- */}
                    <section className="space-y-4 mt-10">
                        {/* ---------- Priorities ---------- */}
                        <section className="space-y-3 mt-10">
                            <h2 className="!text-[26px] font-semibold text-white">What You Are Looking For</h2>
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">What’s most important for
                                    your business right now?</label>
                                <p className="text-sm text-white/70">Select all that apply</p>
                            </div>
                            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {PRIORITY_OPTS.map((opt) => (
                                    <label
                                        key={opt.value}
                                        className="flex items-start gap-3 rounded-xl border border-[#292929] bg-[#111111] p-3 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            value={opt.value}
                                            {...register("priorities")}
                                            className="mt-1 accent-[#D5B27B]"
                                        />
                                        <span className="text-[#F1EEEE] text-[14px] leading-6">{opt.label}</span>
                                    </label>
                                ))}
                            </div>

                            {/* group-level error */}
                            {errorText("priorities" as never)}

                            {/* show extra input only when 'Other' is checked */}
                            {(watch("priorities") || []).includes("other") && (
                                <div className="mt-3">
                                    <label className="block text-[13px] font-light text-[#F1EEEE]/80">
                                        Please describe your other priority
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-md border border-[#292929] bg-[#0C0C0C] p-2 text-[14px] text-[#F1EEEE] focus:outline-none"
                                        placeholder="Type here…"
                                        {...register("otherPriority")}
                                    />
                                    {errorText("otherPriority" as never)}
                                </div>
                            )}
                        </section>

                        {/* ---------- Fix / Improve ---------- */}
                        <section className="space-y-3 mt-10">
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">What would you like to fix or improve with your current payment setup?</label>
                                <p className="text-sm text-white/70">Select all that apply</p>
                            </div>
                            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {FIX_OPTS.map((opt) => (
                                    <label
                                        key={opt.value}
                                        className="flex items-start gap-3 rounded-xl border border-[#292929] bg-[#111111] p-3 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            value={opt.value}
                                            {...register("fixImprovements")}
                                            className="mt-1 accent-[#D5B27B]"
                                        />
                                        <span className="text-[#F1EEEE] text-[14px] leading-6">{opt.label}</span>
                                    </label>
                                ))}
                            </div>

                            {/* group-level error */}
                            {errorText("fixImprovements" as never)}

                            {/* show extra input only when 'Other' is checked */}
                            {(watch("fixImprovements") || []).includes("other") && (
                                <div className="mt-3">
                                    <label className="block text-[13px] font-light text-[#F1EEEE]/80">
                                        Please describe what else you would like to fix or improve
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-md border border-[#292929] bg-[#0C0C0C] p-2 text-[14px] text-[#F1EEEE] focus:outline-none"
                                        placeholder="Type here…"
                                        {...register("otherFixImprovements")}
                                    />
                                    {errorText("otherFixImprovements" as never)}
                                </div>
                            )}
                        </section>
                    </section>

                    <hr className="border-[#292929]/60 my-10"/>

                    {/* ---------- Compliance & Policies ---------- */}
                    <section className="space-y-4 mt-10">
                        <h2 className="!text-[26px] font-semibold text-white">Compliance & Policies</h2>

                        {/* Regulated products */}
                        <div>
                            <label className="block text-base font-light text-[#F1EEEE]">
                                Any Regulated Products?
                            </label>
                            <p className="text-white/60 text-xs mt-1.5">
                                e.g. CBD, medical, gambling, supplements, etc.
                            </p>
                            <textarea
                                rows={3}
                                className="mt-2 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none !font-montserrat"
                                placeholder="Describe if applicable"
                                {...register("regulatedProducts")}
                            />
                        </div>

                        {/* Policy links */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">Refund Policy
                                    (link)</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                    placeholder="https://…"
                                    type="url"
                                    {...register("refundPolicyUrl")}
                                />
                                {errorText("refundPolicyUrl")}
                            </div>

                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">Return Policy
                                    (link)</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                    placeholder="https://…"
                                    type="url"
                                    {...register("returnPolicyUrl")}
                                />
                                {errorText("returnPolicyUrl")}
                            </div>

                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">Privacy Policy
                                    (link)</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                    placeholder="https://…"
                                    type="url"
                                    {...register("privacyPolicyUrl")}
                                />
                                {errorText("privacyPolicyUrl")}
                            </div>

                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">Shipping Policy
                                    (link)</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                    placeholder="https://…"
                                    type="url"
                                    {...register("shippingPolicyUrl")}
                                />
                                {errorText("shippingPolicyUrl")}
                            </div>
                        </div>

                        {/* Site shows full contact info */}
                        <div className="mt-4">
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">Does your website display full contact information (email, phone number, any physical address)? *</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                    placeholder="e.g. Yes - our 'Contact Us' page shows our company email, phone number, and address"
                                    {...register("siteShowsFullContact")}
                                />
                                {errorText("siteShowsFullContact")}
                            </div>
                        </div>

                        {/* Site shows full contact info */}
                        <div className="mt-4">
                            <div>
                                <label className="block text-base font-light text-[#F1EEEE]">Does your website clearly display your registered company name and business details (e.g. registration number and address) in the footer? *</label>
                                <input
                                    className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none"
                                    placeholder="e.g. Yes - our company name, registration number, and address are shown in the footer"
                                    {...register("siteShowsCompanyDetails")}
                                />
                                {errorText("siteShowsCompanyDetails")}
                            </div>
                        </div>
                    </section>

                    <hr className="border-[#292929]/60 my-10"/>

                    {/* ---------- Additional Notes ---------- */}
                    <section className="space-y-4 mt-10">
                        <h2 className="!text-[26px] font-semibold text-white">Additional Notes</h2>
                        <textarea
                            rows={3}
                            className="mt-1 w-full rounded-md border border-[#292929] p-2 text-[#F1EEEE] text-[14px] bg-[#111111] focus:outline-none !font-montserrat"
                            placeholder="Anything else you’d like us to know before onboarding?"
                            {...register("notes")}
                        />
                    </section>

                    <div className="mt-5">
                        {/*<p className="text-white/60 text-xs">Thank you for completing this form — this helps us match your business with the right payment partner. Once reviewed, our team will reach out with next steps for onboarding.</p>*/}
                        <p className="text-white/60 text-xs mb-5">Your details are confidential and used only for merchant screening and partner matching.</p>
                        <CustomTextButton disabled={isSubmitting}
                                          text={isSubmitting ? "Submitting…" : "Submit form"}/>

                    </div>

                </div>
                <SuccessDialog open={isSuccessOpen} onClose={() => setIsSuccessOpen(false)}/>
                <ErrorDialog open={isErrorOpen} message={errorMessage} onClose={() => setIsErrorOpen(false)}/>
            </form>
        </div>
    );
}

/* -------------------- Dialogs (same UX) -------------------- */
function SuccessDialog({open, onClose}: { open: boolean; onClose: () => void }) {
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

function ErrorDialog({open, message, onClose,}: { open: boolean; message?: string; onClose: () => void; })
{
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
