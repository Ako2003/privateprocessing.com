import {z} from "zod";
import {BIZ_SIMPLE, INDUSTRY} from "@/lib/options";
import { IssuesSchema } from "@/schema/issue";
import { PrioritiesSchema} from "@/schema/priority";
import { FixesSchema } from "@/schema/fix";
import {IndustrySchema} from "@/schema/industry";
import {TypeOfBusinessSchema} from "@/schema/typeOfBusiness";

export const BasicSchema = z
    .object({
        // Basic Information
        companyName: z.string().min(1, "Required"),
        registeredCountry: z.string().min(1, "Required"),
        websiteUrl: z.url("Invalid URL").optional().or(z.literal("")),
        contactName: z.string().min(1, "Required"),
        contactRole: z.string().min(1, "Required"),
        email: z.email("Invalid email"),
        taxResident: z.string().min(1, "Required"),

        // Business Overview
        industry: IndustrySchema,
        otherIndustry: z.string().optional(),

        typeOfBusiness: TypeOfBusinessSchema,
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
        itin: z.string().min(1, "Required"),
        issues: IssuesSchema,
        paymentMethods: z.string().min(1, "Required"),
        priorities: PrioritiesSchema,
        otherPriority: z.string().optional(),
        fixImprovements: FixesSchema,
        otherFixImprovements: z.string().optional(),
        // add near the bottom of your .object({...})
        regulatedProducts: z.string().optional(),

        refundPolicyUrl: z.url("Invalid URL").optional().or(z.literal("")),
        returnPolicyUrl: z.url("Invalid URL").optional().or(z.literal("")),
        privacyPolicyUrl: z.url("Invalid URL").optional().or(z.literal("")),
        shippingPolicyUrl: z.url("Invalid URL").optional().or(z.literal("")),

        siteShowsFullContact: z.string().min(1, "Required"),
        siteShowsCompanyDetails: z.string().min(1, "Required"),

        notes: z.string().optional(),
    })
    .refine(
        (data) => (data.industry === "Other" ? !!data.otherIndustry?.trim() : true),
        { message: "Please specify your industry", path: ["otherIndustry"] }
    )
    .refine(
        (data) => (data.typeOfBusiness === "Other" ? !!data.otherTypeOfBusiness?.trim() : true),
        { message: "Please specify your business type", path: ["otherTypeOfBusiness"] }
    )
    .refine(
        (data) => (data.priorities?.includes("other") ? !!data.otherPriority?.trim() : true),
        { message: "Please describe your other priority", path: ["otherPriority"] }
    )
    .refine(
        (data) => (data.fixImprovements?.includes("other") ? !!data.otherFixImprovements?.trim() : true),
        { message: "Please describe what would you like to fix or improve", path: ["otherFixImprovements"] }
    );

export type BasicValues = z.infer<typeof BasicSchema>;