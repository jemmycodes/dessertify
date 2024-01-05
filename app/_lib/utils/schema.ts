import * as z from "zod";

export const createAccountSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "Must be 3 or more characters" })
    .max(255)
    .trim(),
  lastname: z
    .string()
    .min(3, { message: "Must be 3 or more characters" })
    .max(255)
    .trim(),
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()-_+=]{8,}$/
, {
    message:
      "Must be 8 or more characters, at least one uppercase letter, one lowercase letter and one number",
  }),
  confirmPassword: z.string().trim(),
}).refine((data) => data.password === data.confirmPassword, { message: "Passwords don't match", path: ["confirmPassword"] });

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z.string().min(8, { message: "Must be 8 or more characters" }),
});
