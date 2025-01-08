import { z } from "zod";

// ============================================================================
// Base Schemas
// ============================================================================
// Common base schemas used across multiple schema definitions

// ============================================================================
// Request Schemas
// ============================================================================
/**
 * Schemas for authentication-related API requests
 */

/**
 * Create/Update Requests
 */
export const RequestOTPSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const ValidateOTPSchema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().min(4, "OTP must be at least 4 characters"),
});

// ============================================================================
// Response Schemas
// ============================================================================
/**
 * Schemas for authentication-related API responses
 */

/**
 * Base Response Schemas
 */
export const RequestOTPResponseSchema = z.object({
  message: z.string(),
});

export const ValidateOTPResponseSchema = z.object({
  token: z.string(),
});
