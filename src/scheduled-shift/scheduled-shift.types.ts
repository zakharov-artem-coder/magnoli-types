import { z } from "zod";
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

/** List Response Types */
export type ListScheduledShiftsResponseData = {
  items: ScheduledShiftResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};
