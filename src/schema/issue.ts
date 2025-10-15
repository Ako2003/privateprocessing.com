import {z} from "zod";
import {ISSUE_VALUES} from "@/lib/options";

const IssueType = z.enum(ISSUE_VALUES);
const IssueItemSchema = z.object({
    type: IssueType,
    details: z.string().min(1, "Please add a short note"),
})

// array of selected issues with per-item details
export const IssuesSchema = z
    .array(IssueItemSchema)
    .min(1, "Select at least one issue")
    .superRefine((items, ctx) => {
        // ensure unique 'type'
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