import { INDUSTRY } from "@/lib/options";
import { z } from "zod"
// INDUSTRY is a readonly tuple: e.g. ["Fashion","Beauty & Personal Care",...,"Other"] as const
const IndustryEnum = z.enum(INDUSTRY);

export const IndustrySchema = z
    .string()
    .refine((v) => v !== "" && (IndustryEnum.options as readonly string[]).includes(v), {
        message: "Please choose one of the options",
    });

