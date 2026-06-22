import { isValidPhoneNumber } from "npm:react-phone-number-input";
import { z } from "npm:zod";

const safeString = (fieldName: string) =>
    z
        .string()
        .transform((val) => val.trim())
        .refine((val) => val.length > 0, {
            message: `${fieldName} is required`,
        });

export const EnrollmentSchema = z.object({
    student_name: safeString("Student name"),

    dob: z.string().refine((dob) => {
        const birth = new Date(dob);
        const today = new Date();

        const age =
            today.getFullYear() - birth.getFullYear() -
            (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate()) ? 1 : 0);

        return age >= 6;
    }, "Child must be at least 6 years old"),

    gender: z.enum(["Male", "Female"]),

    nationality: safeString("Nationality"),

    parent_name: safeString("Parent name"),

    parent_phone: z.string().refine(
        (value) => isValidPhoneNumber(value || ""),
        {
            message: "Invalid phone number",
        }
    ),

    parent_email: z.string().email("Invalid email"),

    program: safeString("Program"),

    subjects: z.array(z.string()).min(1, "Select at least one subject"),

    schedule: z.string().min(1, "Schedule is required"),

    declaration: z.literal(true, {
        message: "You must accept the declaration"
    }),
});

export const CareerSchema = z.object({
    full_name: safeString("Full name"),

    email: z.string().email("Invalid email"),

    phone: z.string().refine(
        (value) => isValidPhoneNumber(value || ""),
        {
            message: "Invalid phone number",
        }
    ),

    position: safeString("Position"),

    specialization: safeString("Specialization"),

    experience: z
        .coerce
        .number({
            message: "Experience is required"
        })
        .min(0, "Experience cannot be negative"),

    cv: z.any().optional(),

    cover_letter: z.any().optional(),
});