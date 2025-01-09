import { z } from "zod";
import {
  PaginationQuerySchema,
  SearchQuerySchema,
  BaseEntitySchema,
  BusinessSegmentFieldsSchema,
  LocationFieldsSchema,
  EmployeeReferenceSchema,
  MagnoliUserReferenceSchema,
  TimeFieldsSchema,
  DateFieldsSchema,
  DefaultBreakReferenceSchema,
  PaginationResponseFieldsSchema,
  ShiftSourceEnum,
} from "../common";

// ============================================================================
// Base Schema
// ============================================================================
/**
 * Base schema for Scheduled Shifts defining core fields and structure
 */
export const ScheduledShiftSchema = BaseEntitySchema.extend({
  ...DateFieldsSchema.shape,
  ...TimeFieldsSchema.shape,
  ...LocationFieldsSchema.shape,
  employeeId: z.string().nullable(),
  source: ShiftSourceEnum,
  authorId: z.string().nullable(),
  ...BusinessSegmentFieldsSchema.shape,
});

// ============================================================================
// Request Schemas
// ============================================================================

/**
 * Create/Update Request Schemas
 * @description Schemas for creating and updating scheduled shifts
 */
export const CreateScheduledShiftSchema = ScheduledShiftSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateScheduledShiftSchema = CreateScheduledShiftSchema.partial();

/**
 * Read/Delete Request Schemas
 * @description Schemas for retrieving and deleting scheduled shifts
 */
export const GetScheduledShiftByIdSchema = z.object({
  id: z.string(),
});

export const DeleteScheduledShiftSchema = z.object({
  id: z.string(),
});

/**
 * List/Query Request Schema
 * @description Schema for listing and querying scheduled shifts with filters
 */
export const ListScheduledShiftsQuerySchema = PaginationQuerySchema.extend({
  locationId: z.string().optional(),
  employeeId: z.string().optional(),
  businessSegmentId: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  source: ShiftSourceEnum.optional(),
}).merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// ============================================================================

/**
 * Base Response Schema
 * @description Core response structure for scheduled shift data
 */
export const ScheduledShiftResponseSchema = ScheduledShiftSchema.extend({
  employee: EmployeeReferenceSchema,
  author: MagnoliUserReferenceSchema.nullable(),
  location: LocationFieldsSchema.shape.location,
  businessSegment: BusinessSegmentFieldsSchema.shape.businessSegment,
});
