import { z } from "zod";
import { ApiResponse } from "../common";
import {
  ClockedShiftSchema,
  ClockedShiftResponseSchema,
  CreateClockedShiftSchema,
  UpdateClockedShiftSchema,
  GetClockedShiftByIdSchema,
  DeleteClockedShiftSchema,
  ListClockedShiftsQuerySchema,
  ShiftBreakEventSchema,
  ShiftFlagSchema,
} from "./clocked-shift.schemas";

// ============================================================================
// Base Types
// Contains the fundamental type definitions for clocked shifts and related entities
// ============================================================================

export type ClockedShift = z.infer<typeof ClockedShiftSchema>;
export type ClockedShiftResponse = z.infer<typeof ClockedShiftResponseSchema>;
export type ShiftBreakEvent = z.infer<typeof ShiftBreakEventSchema>;
export type ShiftFlag = z.infer<typeof ShiftFlagSchema>;

// ============================================================================
// Request Types
// Types for handling various API requests
// ============================================================================

/**
 * Create/Update Request Types
 * Types for creating and modifying clocked shifts
 */
export type CreateClockedShiftRequest = z.infer<
  typeof CreateClockedShiftSchema
>;
export type UpdateClockedShiftRequest = z.infer<
  typeof UpdateClockedShiftSchema
>;

/**
 * Read/Delete Request Types
 * Types for retrieving and removing clocked shifts
 */
export type GetClockedShiftByIdRequest = z.infer<
  typeof GetClockedShiftByIdSchema
>;
export type DeleteClockedShiftRequest = z.infer<
  typeof DeleteClockedShiftSchema
>;

/**
 * List/Query Request Types
 * Types for listing and querying clocked shifts
 */
export type ListClockedShiftsQuery = z.infer<
  typeof ListClockedShiftsQuerySchema
>;

// ============================================================================
// Response Types
// Types for API responses
// ============================================================================

/**
 * Single Item Response Types
 * Types for individual clocked shift operations
 */
export type GetClockedShiftByIdResponse = ApiResponse<ClockedShiftResponse>;
export type CreateClockedShiftResponse = ApiResponse<ClockedShiftResponse>;
export type UpdateClockedShiftResponse = ApiResponse<ClockedShiftResponse>;
export type DeleteClockedShiftResponse = ApiResponse<{ id: string }>;

/**
 * List Response Types
 * Types for paginated list responses
 */
export type ListClockedShiftsResponseData = {
  items: ClockedShiftResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type ListClockedShiftsResponse =
  ApiResponse<ListClockedShiftsResponseData>;
