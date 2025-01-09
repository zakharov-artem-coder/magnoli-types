import { z } from "zod";

export const RequestOTPRequestSchema = z.object({
  email: z.string().email("Invalid email address"),
});
export const ValidateOTPResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export const ValidateOTPRequestSchema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().min(4, "OTP must be at least 4 characters"),
});
export const RequestOTPResponseSchema = z.object({
  message: z.string(),
});
