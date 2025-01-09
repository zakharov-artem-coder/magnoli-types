import { z } from "zod";
import {
  RequestOTPRequestSchema,
  ValidateOTPRequestSchema,
  RequestOTPResponseSchema,
  ValidateOTPResponseSchema,
} from "./auth.schemas";

export type RequestOTPRequest = z.infer<typeof RequestOTPRequestSchema>;
export type RequestOTPResponse = z.infer<typeof RequestOTPResponseSchema>;

export type ValidateOTPRequest = z.infer<typeof ValidateOTPRequestSchema>;
export type ValidateOTPResponse = z.infer<typeof ValidateOTPResponseSchema>;
