/* -------------------- options -------------------- */
export const BIZ_SIMPLE = ["Own Brand", "Dropshipping", "3PL", "Other"] as const;
export const INDUSTRY = ["Fashion", "Beauty & Personal Care", "Fitness / Health", "Electronics", "Home & Living", "Pets / Hobby / Gaming", "Other"]
export const MARKETS = ["US", "UK", "EU", "CA", "AU", "Other"] as const;
export const VOLUME3 = ["Below $25K", "$25K–$100K", "$100K+"] as const;
export const FULFILLMENTS = ["Own warehouse", "Dropship", "3PL"] as const;
export const YESNO = ["Yes", "No"] as const;
export const ISSUES = [
    {
        value: "Account holds or sudden shutdowns",
        label: "Account holds or sudden shutdowns",
        prompt: "How long was the hold, and what reason did they give?",
    },
    {
        value: "High chargebacks / disputes",
        label: "High chargebacks / disputes",
        prompt: "What’s your average chargeback rate?",
    },
    {
        value: "Volume caps or payout delays",
        label: "Volume caps or payout delays",
        prompt: "What’s your processing cap, and how many days are payouts delayed?",
    },
    {
        value: "Limited supported countries or currencies",
        label: "Limited supported countries or currencies",
        prompt: "Which countries or currencies can’t your provider support?",
    },
    { value: "other", label: "Other", prompt: "Please describe" },
] as const;

export const ISSUE_VALUES = ISSUES.map(i => i.value) as [
    "Account holds or sudden shutdowns",
    "High chargebacks / disputes",
    "Volume caps or payout delays",
    "Limited supported countries or currencies",
    "other"
];

// Payments priorities (what's most important now)
export const PRIORITY_OPTS = [
    { value: "Reach Regions", label: "Reaching new countries or regions" },
    { value: "Faster Reliable Payouts", label: "Getting paid faster and more reliably" },
    { value: "Easier Checkout", label: "Making checkout easier for customers" },
    { value: "Unified System", label: "Managing everything in one simple system" },
    { value: "Clear Reports", label: "Having clear reports and payment insights" },
    { value: "other", label: "Other"},
] as const;

// Fix / improve targets
export const FIX_OPTS = [
    { value: "Faster Payouts", label: "Faster payouts and fewer delays" },
    { value: "More Approvals", label: "More successful transactions (less declined payments)" },
    { value: "Better Overview", label: "Better overview of sales and settlements" },
    { value: "More Currencies", label: "Ability to accept more currencies" },
    { value: "More Methods", label: "Access to more payment methods for your customers" },
    { value: "other", label: "Other"},
] as const;

export const PRIORITY_VALUES = PRIORITY_OPTS.map(o => o.value) as [
    "Reach Regions",
    "Faster Reliable Payouts",
    "Easier Checkout",
    "Unified System",
    "Clear Reports",
    "other",
];

export const FIX_VALUES = FIX_OPTS.map(o => o.value) as [
    "Faster Payouts",
    "More Approvals",
    "Better Overview",
    "More Currencies",
    "More Methods",
    "other"
];
