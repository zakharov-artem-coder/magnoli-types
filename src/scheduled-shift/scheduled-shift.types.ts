import { z } from "zod";
import { ApiResponse } from "../common";
import {
  ScheduledShiftSchema,
  ScheduledShiftResponseSchema,
  CreateScheduledShiftSchema,
  UpdateScheduledShiftSchema,
  GetScheduledShiftByIdSchema,
  DeleteScheduledShiftSchema,
  ListScheduledShiftsQuerySchema,
} from "./scheduled-shift.schemas";

// ============================================================================
// Base Types
// ============================================================================
/**
 * Core types representing the fundamental scheduled shift data structures
 */
export type ScheduledShift = z.infer<typeof ScheduledShiftSchema>;
export type ScheduledShiftResponse = z.infer<
  typeof ScheduledShiftResponseSchema
>;

// ============================================================================
// Request Types
// ============================================================================
/**
 * Types for handling various API requests
 */

/** Create and Update Request Types */
export type CreateScheduledShiftRequest = z.infer<
  typeof CreateScheduledShiftSchema
>;
export type UpdateScheduledShiftRequest = z.infer<
  typeof UpdateScheduledShiftSchema
>;

/** Read and Delete Request Types */
export type GetScheduledShiftByIdRequest = z.infer<
  typeof GetScheduledShiftByIdSchema
>;
export type DeleteScheduledShiftRequest = z.infer<
  typeof DeleteScheduledShiftSchema
>;

/** List and Query Request Types */
export type ListScheduledShiftsQuery = z.infer<
  typeof ListScheduledShiftsQuerySchema
>;

// ============================================================================
// Response Types
// ============================================================================
/**
 * Types for API responses
 */

/** Single Item Response Types */
export type GetScheduledShiftByIdResponse = ApiResponse<ScheduledShiftResponse>;
export type CreateScheduledShiftResponse = ApiResponse<ScheduledShiftResponse>;
export type UpdateScheduledShiftResponse = ApiResponse<ScheduledShiftResponse>;
export type DeleteScheduledShiftResponse = ApiResponse<{ id: string }>;

/** List Response Types */
export type ListScheduledShiftsResponseData = {
  items: ScheduledShiftResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type ListScheduledShiftsResponse =
  ApiResponse<ListScheduledShiftsResponseData>;
