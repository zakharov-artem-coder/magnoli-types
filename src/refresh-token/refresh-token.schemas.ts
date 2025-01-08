// ============================================================================
// Base Schema
// ============================================================================
// Defines the core refresh token data structure
import { z } from "zod";
import {
  ApiResponseSchema,
  BaseEntitySchema,
  MagnoliUserReferenceSchema,
} from "../common";

export const RefreshTokenSchema = BaseEntitySchema.extend({
  token: z.string(),
  expiresAt: z.string(),
  userId: z.string(),
});

// ============================================================================
// Request Schemas
// ============================================================================

/**
 * Create/Update Request Schemas
 * ---------------------------
 * Schemas for creating and updating refresh tokens
 */
export const CreateRefreshTokenSchema = RefreshTokenSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

/**
 * Read/Delete Request Schemas
 * --------------------------
 * Schemas for reading and deleting refresh tokens
 */
export const DeleteRefreshTokenSchema = z.object({
  token: z.string(),
});

/**
 * Authentication Request Schemas
 * ----------------------------
 * Schemas for token refresh operations
 */
export const RefreshTokenRequestSchema = z.object({
  token: z.string(),
});

// ============================================================================
// Response Schemas
// ============================================================================

/**
 * Base Response Schemas
 * --------------------
 * Core response structures for refresh token operations
 */
export const RefreshTokenResponseSchema = RefreshTokenSchema.extend({
  user: MagnoliUserReferenceSchema,
});

/**
 * API Response Wrappers
 * --------------------
 * Wrapped response schemas for API endpoints
 */
export const CreateRefreshTokenResponseSchema = ApiResponseSchema(
  RefreshTokenResponseSchema
);

export const DeleteRefreshTokenResponseSchema = ApiResponseSchema(
  z.object({
    token: z.string(),
  })
);

export const RefreshTokenResponseWithAuthSchema = ApiResponseSchema(
  z.object({
    token: z.string(),
    refreshToken: z.string(),
  })
);
