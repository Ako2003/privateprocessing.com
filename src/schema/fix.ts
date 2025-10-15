import {z} from "zod";
import {FIX_VALUES} from "@/lib/options";

const FixEnum = z.enum(FIX_VALUES);

export const FixesSchema = z
    .array(FixEnum)
    .min(1, "Select at least one item to improve")
    .superRefine((arr, ctx) => {
        const s = new Set(arr);
        if (s.size !== arr.length) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Duplicate selection" });
        }
    });