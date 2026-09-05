import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

const safeString = (field: string) =>
    z
        .string()
        .transform((val) => val.trim())
        .refine((val) => val.length > 0, {
            message: `${field}.required`,
        });

export const EnrollmentSchema = z.object({
    student_name: safeString("studentName"),

    dob: z.string().refine((dob) => {
        const birth = new Date(dob);
        const today = new Date();

        const age =
            today.getFullYear() - birth.getFullYear() -
            (today < new Date(
                today.getFullYear(),
                birth.getMonth(),
                birth.getDate()
            ) ? 1 : 0);

        return age >= 6;
    }, "dob.atLeastSix"),

    gender: z.enum(["Male", "Female"], {
        message: "gender.required",
    }),

    nationality: safeString("nationality"),

    parent_name: safeString("parentName"),

    parent_phone: z.string().optional().superRefine((value, ctx) => {
        if (!value || value.trim() === "") {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "parentPhone.required",
            });
            return;
        }

        if (!isValidPhoneNumber(value)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "parentPhone.invalid",
            });
        }
    }),

    parent_email: z.string().email("parentEmail.invalid"),

    program: safeString("program"),

    subjects: z.array(z.string()).min(1, "subjects.required"),

    schedule: z.string().min(1, "schedule.required"),

    declaration: z.literal(true, {
        message: "declaration.required",
    }),
});


export const CareerSchema = z.object({
    full_name: safeString("fullName"),

    email: z.string().email("email.invalid"),

    phone: z.string().optional().superRefine((value, ctx) => {
        if (!value || value.trim() === "") {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "phone.required",
            });
            return;
        }

        if (!isValidPhoneNumber(value)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "phone.invalid",
            });
        }
    }),

    position: safeString("position"),

    specialization: safeString("specialization"),

    experience: z.coerce
        .number({
            message: "experience.required",
        })
        .min(0, "experience.required"),

    cv: z.any().refine((v) => v instanceof File, {
        message: "cv.required",
    }),

    cover_letter: z.any().optional(),
});