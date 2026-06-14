"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect, useRef } from "react";

// ----- options -----
const COMM_METHODS = ["E-Mail", "Phone"] as const;

const LANGUAGES = [
    "English",
    "German",
    "French",
    "Arabic",
    "Turkish",
    "Russian",
    "Spanish",
    "Other",
] as const;

const SPOKEN_WITH = [
    "Samuel",
    "Vincent",
    "Katerina",
    "Donald",
    "No, not yet",
] as const;

const COUNTRIES = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "UAE",
    "Uganda",
    "Ukraine",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Other"
] as const;

const SHOPPING_CARTS = [
    "API",
    "Checkout Champ",
    "Funnelish",
    "Magento",
    "Payment Link",
    "Shopify",
    "Shopware",
    "WooCommerce",
    "Others",
] as const;

const PAYMENT_PROVIDERS = [
    "2Checkout",
    "Adyen",
    "Amazon Pay",
    "Authorize.net",
    "BlueSnap",
    "Braintree",
    "Buy Now Pay Later",
    "Checkout.com",
    "CardGate",
    "Klarna",
    "Mollie",
    "Nexi",
    "NMI",
    "PayPal",
    "Payeer",
    "Payoneer",
    "Skrill",
    "Shopify Payments",
    "Stripe",
    "Unzer",
    "Other",
] as const;

// ----- schema (non-file fields) -----
const IntakeSchema = z.object({
    email: z.string().email(),
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    mobilePhone: z.string().min(6, "Enter a valid phone"),
    phone: z.string().optional(),
    preferredComm: z.array(z.enum(COMM_METHODS)).min(1, "Select at least one"),
    preferredLanguage: z.enum(LANGUAGES),
    spokenWith: z.enum(SPOKEN_WITH),
    referral: z.string().optional(),
    companyName: z.string().min(1, "Required"),
    address1: z.string().min(1, "Required"),
    city: z.string().min(1, "Required"),
    region: z.string().min(1, "Required"),
    postal: z.string().min(1, "Required"),
    country: z.enum(COUNTRIES),
    website: z.string().url().optional().or(z.literal("")),
    foundingYear: z
        .string()
        .regex(/^\d{4}$/, "YYYY")
        .refine((y) => {
            const n = Number(y);
            return n >= 1900 && n <= new Date().getFullYear();
        }, "Invalid year"),
    annualRevenue: z.string().optional(),
    employees: z.string().optional(),
    taxNumber: z.string().min(1, "Required"),
    description: z.string().min(10, "Tell us a bit more"),
    shoppingCarts: z.array(z.enum(SHOPPING_CARTS)).min(1, "Select at least one"),
    paymentProviders: z
        .array(z.enum(PAYMENT_PROVIDERS))
        .min(1, "Select at least one"),
    reserves: z.string().optional(),
});

export type IntakeValues = z.infer<typeof IntakeSchema>;

type FileBundle = {
    processingHistory?: File[]; // last 3 months processing (processor & credit cards)
    businessLicense?: File[];
    bankStatements?: File[]; // up to 3
    shareholderIDs?: File[]; // IDs/passports of shareholders with >=25%
    supplierAgreement?: File[];
};

const maxFileSizeMB = 10;
const accept = ".pdf,.png,.jpg,.jpeg,.webp";

function validateFiles(files: File[], max = maxFileSizeMB) {
    for (const f of files) {
        if (f.size > max * 1024 * 1024) {
            return `File ${f.name} is larger than ${max}MB`;
        }
    }
    return null;
}

export default function MerchantIntakeForm() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
    } = useForm<IntakeValues>({
        resolver: zodResolver(IntakeSchema),
        defaultValues: {
            preferredComm: [],
            preferredLanguage: "English",
            spokenWith: "No, not yet",
            country: "Germany",
            shoppingCarts: [],
            paymentProviders: [],
        },
    });

    const [isSuccessOpen, setIsSuccessOpen] = useState(false); // already added
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [fileErrors, setFileErrors] = useState<Record<string, string | null>>(
        {}
    );

    const onSubmit = async (values: IntakeValues) => {
        // gather files from the DOM (simplest + works well with FormData)
        const processingHistory = (document.getElementById(
            "processingHistory"
        ) as HTMLInputElement)?.files;
        const businessLicense = (document.getElementById(
            "businessLicense"
        ) as HTMLInputElement)?.files;
        const bankStatements = (document.getElementById(
            "bankStatements"
        ) as HTMLInputElement)?.files;
        const shareholderIDs = (document.getElementById(
            "shareholderIDs"
        ) as HTMLInputElement)?.files;
        const supplierAgreement = (document.getElementById(
            "supplierAgreement"
        ) as HTMLInputElement)?.files;

        const bundles: FileBundle = {
            processingHistory: processingHistory ? Array.from(processingHistory) : [],
            businessLicense: businessLicense ? Array.from(businessLicense) : [],
            bankStatements: bankStatements ? Array.from(bankStatements) : [],
            shareholderIDs: shareholderIDs ? Array.from(shareholderIDs) : [],
            supplierAgreement: supplierAgreement ? Array.from(supplierAgreement) : [],
        };

        // simple file validations
        const fe: Record<string, string | null> = {};
        fe.processingHistory = validateFiles(bundles.processingHistory ?? []);
        fe.businessLicense = validateFiles(bundles.businessLicense ?? []);
        fe.bankStatements = validateFiles(bundles.bankStatements ?? []);
        fe.shareholderIDs = validateFiles(bundles.shareholderIDs ?? []);
        fe.supplierAgreement = validateFiles(bundles.supplierAgreement ?? []);
        setFileErrors(fe);

        if (Object.values(fe).some((e) => e)) return;

        const formData = new FormData();
        formData.append("data", JSON.stringify(values));

        (bundles.processingHistory ?? []).forEach((f) =>
            formData.append("processingHistory", f)
        );
        (bundles.businessLicense ?? []).forEach((f) =>
            formData.append("businessLicense", f)
        );
        (bundles.bankStatements ?? []).forEach((f) =>
            formData.append("bankStatements", f)
        );
        (bundles.shareholderIDs ?? []).forEach((f) =>
            formData.append("shareholderIDs", f)
        );
        (bundles.supplierAgreement ?? []).forEach((f) =>
            formData.append("supplierAgreement", f)
        );

        const res = await fetch("/api/merchant-intake", {
            method: "POST",
            body: formData,
        });

        if (!res.ok) {
            let msg = "Something went wrong. Please try again.";
            try {
                const contentType = res.headers.get("content-type") || "";
                if (contentType.includes("application/json")) {
                    const j = await res.json();
                    msg = j.error || j.message || (j.issues ? JSON.stringify(j.issues) : msg);
                } else {
                    const t = await res.text();
                    msg = t || msg;
                }
            } catch {
                // keep default msg
            }
            setErrorMessage(msg);
            setIsErrorOpen(true);
            return;
        }

        reset();
        ["processingHistory","businessLicense","bankStatements","shareholderIDs","supplierAgreement"]
            .forEach((id) => {
                const el = document.getElementById(id) as HTMLInputElement | null;
                if (el) el.value = "";
            });

        setIsSuccessOpen(true);
    };

    const errorText = (name: keyof IntakeValues) =>
        errors[name]?.message ? (
            <p className="text-sm text-red-600 mt-1">{String(errors[name]?.message)}</p>
        ) : null;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-3xl space-y-8 bg-white shadow-lg rounded-2xl p-8"
        >
            <h1 className="text-3xl font-bold text-gray-700">Merchant Intake Form</h1>

            {/* Contact */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                        type="email"
                        className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                        {...register("email")}
                        placeholder="you@company.com"
                    />
                    {errorText("email")}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name *</label>
                    <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="first name" {...register("firstName")} />
                    {errorText("firstName")}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                    <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="last name" {...register("lastName")} />
                    {errorText("lastName")}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Mobile Phone *</label>
                    <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="mobile phone" {...register("mobilePhone")} />
                    {errorText("mobilePhone")}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="phone" {...register("phone")} />
                    {errorText("phone")}
                </div>
            </section>

            {/* Communication + Language */}
            <section className="space-y-4">
                <div>
                    <p className="text-sm font-medium text-gray-700">Preferred Communication Methods *</p>
                    <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {COMM_METHODS.map((m) => (
                            <label key={m} className="inline-flex items-center gap-2 text-gray-700">
                                <input type="checkbox" value={m} {...register("preferredComm")} />
                                <span>{m}</span>
                            </label>
                        ))}
                    </div>
                    {errorText("preferredComm")}
                </div>

                <div className="grid grid-cols-1  gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Preferred Language *</label>
                        <select className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" {...register("preferredLanguage")}>
                            {LANGUAGES.map((l) => (
                                <option key={l} value={l}>{l}</option>
                            ))}
                        </select>
                        {errorText("preferredLanguage")}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Have you already spoken with *</label>
                        <select className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" {...register("spokenWith")}>
                            {SPOKEN_WITH.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                        {errorText("spokenWith")}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Were you referred to us? (Name/Org)</label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="Optional" {...register("referral")} />
                    </div>
                </div>
            </section>

            {/* Company + Address */}
            <section className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Company Name *</label>
                    <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="Company Name" {...register("companyName")} />
                    {errorText("companyName")}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Address *</label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="Address" {...register("address1")} />
                        {errorText("address1")}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Region / State / Province *</label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="Region" {...register("region")} />
                        {errorText("region")}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">City *</label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="City" {...register("city")} />
                        {errorText("city")}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">ZIP / Postal Code *</label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="ZIP" {...register("postal")} />
                        {errorText("postal")}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Country *</label>
                        <select className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" {...register("country")}>
                            {COUNTRIES.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        {errorText("country")}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Website / URL</label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="https://…" {...register("website")} />
                        {errorText("website")}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Founding Year *</label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="YYYY" {...register("foundingYear")} />
                        {errorText("foundingYear")}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Annual Revenue</label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="e.g. €1M–€5M" {...register("annualRevenue")} />
                        {errorText("annualRevenue")}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Employees</label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="e.g. 10–50" {...register("employees")} />
                        {errorText("employees")}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Business Tax Number / EIN / VAT *
                        </label>
                        <input className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="Tax Number" {...register("taxNumber")} />
                        {errorText("taxNumber")}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description *</label>
                    <textarea
                        rows={4}
                        className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                        placeholder="Explain your current challenges"
                        {...register("description")}
                    />
                    {errorText("description")}
                </div>
            </section>

            {/* Shopping carts & Providers */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p className="text-sm font-medium text-gray-700">Shopping Carts used *</p>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {SHOPPING_CARTS.map((c) => (
                            <label key={c} className="inline-flex items-center gap-2 text-gray-700">
                                <input type="checkbox" value={c} {...register("shoppingCarts")} />
                                <span>{c}</span>
                            </label>
                        ))}
                    </div>
                    {errorText("shoppingCarts")}
                </div>

                <div>
                    <p className="text-sm font-medium text-gray-700">Payment Providers *</p>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                        {PAYMENT_PROVIDERS.map((p) => (
                            <label key={p} className="inline-flex items-center gap-2">
                                <input type="checkbox" value={p} {...register("paymentProviders")} />
                                <span>{p}</span>
                            </label>
                        ))}
                    </div>
                    {errorText("paymentProviders")}
                </div>
            </section>

            {/* Reserves */}
            <section>
                <label className="block text-sm font-medium text-gray-700">Reserves</label>
                <textarea
                    rows={3}
                    className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    placeholder="If you have any reserves or holds with payment providers, list name and amounts"
                    {...register("reserves")}
                />
                {errorText("reserves")}
            </section>

            {/* Files */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700">Documents</h2>

                <FileRow
                    id="processingHistory"
                    label="Last 3 Months of Processing History (Processor & Credit Cards)"
                    hint="PDF/JPG/PNG, up to 10MB each"
                    multiple
                    accept={accept}
                    error={fileErrors.processingHistory}
                />

                <FileRow
                    id="businessLicense"
                    label="Business License"
                    multiple
                    accept={accept}
                    error={fileErrors.businessLicense}
                />

                <FileRow
                    id="bankStatements"
                    label="Last Three Months of Bank Statements"
                    multiple
                    accept={accept}
                    error={fileErrors.bankStatements}
                />

                <FileRow
                    id="shareholderIDs"
                    label="Government-issued Photo ID / Passport of Shareholders with ≥25%"
                    multiple
                    accept={accept}
                    error={fileErrors.shareholderIDs}
                />

                <FileRow
                    id="supplierAgreement"
                    label="Supplier Agreement"
                    multiple
                    accept={accept}
                    error={fileErrors.supplierAgreement}
                />
            </section>

            <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-black px-5 py-3 text-white disabled:opacity-60"
            >
                {isSubmitting ? "Submitting…" : "Submit"}
            </button>
            <SuccessDialog
                open={isSuccessOpen}
                onClose={() => setIsSuccessOpen(false)}
            />
            <ErrorDialog
                open={isErrorOpen}
                message={errorMessage}
                onClose={() => setIsErrorOpen(false)}
            />


        </form>
    );
}

function FileRow({
                     id,
                     label,
                     hint,
                     multiple,
                     accept,
                     error,
                 }: {
    id: string;
    label: string;
    hint?: string;
    multiple?: boolean;
    accept?: string;
    error?: string | null;
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                id={id}
                type="file"
                className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                multiple={multiple}
                accept={accept}
            />
            <p className="text-xs text-gray-500 mt-1">{hint ?? "PDF/JPG/PNG up to 10MB"}</p>
            {error ? <p className="text-sm text-red-600 mt-1">{error}</p> : null}
        </div>
    );
}

function SuccessDialog({
                           open,
                           onClose,
                       }: {
    open: boolean;
    onClose: () => void;
}) {
    // focus the close button when opened
    const [mounted, setMounted] = useState(false);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (open && mounted) {
            closeBtnRef.current?.focus();
            // prevent background scroll while modal open
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
            onKeyDown={(e) => {
                if (e.key === "Escape") onClose();
            }}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Panel */}
            <div className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
                <div className="p-6 text-center">
                    {/* Circle check icon */}
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="m22 4-10 10-3-3" />
                        </svg>
                    </div>

                    <h2 id="intake-success-title" className="text-xl font-semibold text-gray-900">
                        Submission received 🎉
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Thank you! Your merchant intake form was submitted successfully.
                        We’ve emailed the details and attachments to our review team.
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
            onKeyDown={(e) => {
                if (e.key === "Escape") onClose();
            }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

            {/* Panel */}
            <div className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
                <div className="p-6 text-center">
                    {/* Error icon */}
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-red-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
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
