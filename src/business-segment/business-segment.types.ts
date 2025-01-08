import { z } from "zod";
import { ApiResponse } from "../common";
import {
  BusinessSegmentSchema,
  BusinessSegmentResponseSchema,
  CreateBusinessSegmentSchema,
  UpdateBusinessSegmentSchema,
  GetBusinessSegmentByIdSchema,
  DeleteBusinessSegmentSchema,
  ListBusinessSegmentsQuerySchema,
} from "./business-segment.schemas";

// ============================================================================
// Base Types
// ============================================================================
/**
 * Core business segment type definitions
 */
export type BusinessSegment = z.infer<typeof BusinessSegmentSchema>;
export type BusinessSegmentResponse = z.infer<
  typeof BusinessSegmentResponseSchema
>;

// ============================================================================
// Request Types
// ============================================================================

/**
 * @section Create/Update Request Types
 */
export type CreateBusinessSegmentRequest = z.infer<
  typeof CreateBusinessSegmentSchema
>;
export type UpdateBusinessSegmentRequest = z.infer<
  typeof UpdateBusinessSegmentSchema
>;

/**
 * @section Read/Delete Request Types
 */
export type GetBusinessSegmentByIdRequest = z.infer<
  typeof GetBusinessSegmentByIdSchema
>;
export type DeleteBusinessSegmentRequest = z.infer<
  typeof DeleteBusinessSegmentSchema
>;

/**
 * @section List/Query Request Types
 */
export type ListBusinessSegmentsQuery = z.infer<
  typeof ListBusinessSegmentsQuerySchema
>;

// ============================================================================
// Response Types
// ============================================================================

/**
 * @section List Response Types
 */
export type ListBusinessSegmentsResponseData = {
  items: BusinessSegmentResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

/**
 * @section API Response Types
 */
export type ListBusinessSegmentsResponse =
  ApiResponse<ListBusinessSegmentsResponseData>;
export type CreateBusinessSegmentResponse =
  ApiResponse<BusinessSegmentResponse>;
export type UpdateBusinessSegmentResponse =
  ApiResponse<BusinessSegmentResponse>;
export type DeleteBusinessSegmentResponse = ApiResponse<{ id: string }>;
export type GetBusinessSegmentByIdResponse =
  ApiResponse<BusinessSegmentResponse>;
