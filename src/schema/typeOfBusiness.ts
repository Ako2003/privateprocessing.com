// schema/typeOfBusiness.ts
import { z } from "zod";
import { BIZ_SIMPLE } from "@/lib/options";

const TypeOfBusinessEnum = z.enum(BIZ_SIMPLE);

export const TypeOfBusinessSchema = z
    .union([
        z.literal(""),
        TypeOfBusinessEnum
    ])
    .refine(
        (v) => v !== "",
        { message: "Please choose one of the options" }
    );