import { z } from "zod";
import { ApiResponse } from "../common";
import {
  DefaultBreakSchema,
  DefaultBreakResponseSchema,
  CreateDefaultBreakSchema,
  UpdateDefaultBreakSchema,
  GetDefaultBreakByIdSchema,
  DeleteDefaultBreakSchema,
  ListDefaultBreaksQuerySchema,
} from "./default-break.schemas";

// ============================================================================
// Base Types
// ============================================================================
/**
 * Core data types representing default break entities
 */
export type DefaultBreak = z.infer<typeof DefaultBreakSchema>;
export type DefaultBreakResponse = z.infer<typeof DefaultBreakResponseSchema>;

// ============================================================================
// Request Types
// ============================================================================

/**
 * @section Create/Update Request Types
 * Types for creating and modifying default breaks
 */
export type CreateDefaultBreakRequest = z.infer<
  typeof CreateDefaultBreakSchema
>;
export type UpdateDefaultBreakRequest = z.infer<
  typeof UpdateDefaultBreakSchema
>;

/**
 * @section Read/Delete Request Types
 * Types for retrieving and removing default breaks
 */
export type GetDefaultBreakByIdRequest = z.infer<
  typeof GetDefaultBreakByIdSchema
>;
export type DeleteDefaultBreakRequest = z.infer<
  typeof DeleteDefaultBreakSchema
>;

/**
 * @section List/Query Request Types
 * Types for listing and querying default breaks
 */
export type ListDefaultBreaksQuery = z.infer<
  typeof ListDefaultBreaksQuerySchema
>;

// ============================================================================
// Response Types
// ============================================================================

/**
 * @section Single Item Response Types
 * Response types for individual default break operations
 */
export type GetDefaultBreakByIdResponse = ApiResponse<DefaultBreakResponse>;
export type CreateDefaultBreakResponse = ApiResponse<DefaultBreakResponse>;
export type UpdateDefaultBreakResponse = ApiResponse<DefaultBreakResponse>;
export type DeleteDefaultBreakResponse = ApiResponse<{ id: string }>;

/**
 * @section List Response Types
 * Response types for list operations
 */
export type ListDefaultBreaksResponseData = {
  items: DefaultBreakResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type ListDefaultBreaksResponse =
  ApiResponse<ListDefaultBreaksResponseData>;
