import { z } from "zod";
import { ApiResponse } from "../common";
import {
  PositionSchema,
  PositionResponseSchema,
  CreatePositionSchema,
  UpdatePositionSchema,
  GetPositionByIdSchema,
  DeletePositionSchema,
  ListPositionsQuerySchema,
} from "./position.schemas";

// ============================================================================
// Base Types
// ============================================================================
/**
 * Core position type definitions
 */
export type Position = z.infer<typeof PositionSchema>;
export type PositionResponse = z.infer<typeof PositionResponseSchema>;

// ============================================================================
// Request Types
// ============================================================================
/**
 * @section Create/Update Request Types
 * Types for creating and updating position records
 */
export type CreatePositionRequest = z.infer<typeof CreatePositionSchema>;
export type UpdatePositionRequest = z.infer<typeof UpdatePositionSchema>;

/**
 * @section Read/Delete Request Types
 * Types for retrieving and removing position records
 */
export type GetPositionByIdRequest = z.infer<typeof GetPositionByIdSchema>;
export type DeletePositionRequest = z.infer<typeof DeletePositionSchema>;

/**
 * @section List/Query Request Types
 * Types for querying multiple position records
 */
export type ListPositionsQuery = z.infer<typeof ListPositionsQuerySchema>;

// ============================================================================
// Response Types
// ============================================================================
/**
 * @section Single Item Response Types
 * Types for individual position responses
 */
export type GetPositionByIdResponse = ApiResponse<PositionResponse>;
export type CreatePositionResponse = ApiResponse<PositionResponse>;
export type UpdatePositionResponse = ApiResponse<PositionResponse>;
export type DeletePositionResponse = ApiResponse<{ id: string }>;

/**
 * @section List Response Types
 * Types for position list responses
 */
export type ListPositionsResponseData = {
  items: PositionResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type ListPositionsResponse = ApiResponse<ListPositionsResponseData>;
