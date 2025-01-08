import { z } from "zod";
import { ApiResponse } from "../common";
import {
  RefreshTokenSchema,
  RefreshTokenResponseSchema,
  CreateRefreshTokenSchema,
  DeleteRefreshTokenSchema,
  RefreshTokenRequestSchema,
  RefreshTokenResponseWithAuthSchema,
} from "./refresh-token.schemas";

//============================================================================
// Base Types
//============================================================================
/**
 * Core refresh token type definitions
 */
export type RefreshToken = z.infer<typeof RefreshTokenSchema>;
export type RefreshTokenResponse = z.infer<typeof RefreshTokenResponseSchema>;

//============================================================================
// Request Types
//============================================================================
/**
 * Create/Update Operations
 */
export type CreateRefreshTokenRequest = z.infer<
  typeof CreateRefreshTokenSchema
>;
export type RefreshTokenRequest = z.infer<typeof RefreshTokenRequestSchema>;

/**
 * Delete Operations
 */
export type DeleteRefreshTokenRequest = z.infer<
  typeof DeleteRefreshTokenSchema
>;

//============================================================================
// Response Types
//============================================================================
/**
 * Single Item Responses
 */
export type CreateRefreshTokenResponse = ApiResponse<RefreshTokenResponse>;
export type DeleteRefreshTokenResponse = ApiResponse<{ token: string }>;
export type RefreshTokenResponseWithAuth = z.infer<
  typeof RefreshTokenResponseWithAuthSchema
>;
