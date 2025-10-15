import {z} from "zod";
import {PRIORITY_VALUES} from "@/lib/options";

const PriorityEnum = z.enum(PRIORITY_VALUES);

export const PrioritiesSchema = z
    .array(PriorityEnum)
    .min(1, "Select at least one priority")
    .superRefine((arr, ctx) => {
        const s = new Set(arr);
        if (s.size !== arr.length) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Duplicate selection" });
        }
    });