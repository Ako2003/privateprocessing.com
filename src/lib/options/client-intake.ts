/* -------------------- options -------------------- */
export const BIZ_SIMPLE = ["Own Brand", "Dropshipping", "3PL", "Other"] as const;
export const INDUSTRY = ["Fashion", "Beauty & Personal Care", "Fitness / Health", "Electronics", "Home & Living", "Pets / Hobby / Gaming", "Other"]
export const MARKETS = ["US", "UK", "EU", "CA", "AU", "Other"] as const;
export const VOLUME3 = ["Below $25K", "$25K–$100K", "$100K+"] as const;
export const FULFILLMENTS = ["Own warehouse", "Dropship", "3PL"] as const;
export const YESNO = ["Yes", "No"] as const;
export const ISSUES = [
    {
        value: "holds",
        label: "Account holds or sudden shutdowns",
        prompt: "How long was the hold, and what reason did they give?",
    },
    {
        value: "chargebacks",
        label: "High chargebacks / disputes",
        prompt: "What’s your average chargeback rate?",
    },
    {
        value: "volume_caps",
        label: "Volume caps or payout delays",
        prompt: "What’s your processing cap, and how many days are payouts delayed?",
    },
    {
        value: "limited_geo",
        label: "Limited supported countries or currencies",
        prompt: "Which countries or currencies can’t your provider support?",
    },
    { value: "other", label: "Other", prompt: "Please describe" },
] as const;

export const ISSUE_VALUES = ISSUES.map(i => i.value) as [
    "holds",
    "chargebacks",
    "volume_caps",
    "limited_geo",
    "other"
];

// Payments priorities (what's most important now)
export const PRIORITY_OPTS = [
    { value: "reach_regions", label: "Reaching new countries or regions" },
    { value: "faster_reliable_payouts", label: "Getting paid faster and more reliably" },
    { value: "easier_checkout", label: "Making checkout easier for customers" },
    { value: "unified_system", label: "Managing everything in one simple system" },
    { value: "clear_reports", label: "Having clear reports and payment insights" },
] as const;

// Fix / improve targets
export const FIX_OPTS = [
    { value: "faster_payouts", label: "Faster payouts and fewer delays" },
    { value: "more_approvals", label: "More successful transactions (less declined payments)" },
    { value: "better_overview", label: "Better overview of sales and settlements" },
    { value: "more_currencies", label: "Ability to accept more currencies" },
    { value: "more_methods", label: "Access to more payment methods for your customers" },
] as const;

export const PRIORITY_VALUES = PRIORITY_OPTS.map(o => o.value) as [
    "reach_regions",
    "faster_reliable_payouts",
    "easier_checkout",
    "unified_system",
    "clear_reports"
];

export const FIX_VALUES = FIX_OPTS.map(o => o.value) as [
    "faster_payouts",
    "more_approvals",
    "better_overview",
    "more_currencies",
    "more_methods"
];
