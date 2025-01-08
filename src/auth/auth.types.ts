import { z } from "zod";
import {
  RequestOTPSchema,
  ValidateOTPSchema,
  RequestOTPResponseSchema,
  ValidateOTPResponseSchema,
} from "./auth.schemas";

// ============================================================================
// Request Types
// ============================================================================

/**
 * Authentication Request Types
 * Contains types for OTP request and validation operations
 */

export type RequestOTPRequest = z.infer<typeof RequestOTPSchema>;
export type ValidateOTPRequest = z.infer<typeof ValidateOTPSchema>;

// ============================================================================
// Response Types
// ============================================================================

/**
 * Authentication Response Types
 * Contains types for OTP request and validation responses
 */

export type RequestOTPResponse = z.infer<typeof RequestOTPResponseSchema>;
export type ValidateOTPResponse = z.infer<typeof ValidateOTPResponseSchema>;
