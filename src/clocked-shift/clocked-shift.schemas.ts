import { z } from "zod";
import {
  ApiResponseSchema,
  PaginationQuerySchema,
  SearchQuerySchema,
  BaseEntitySchema,
  BusinessSegmentFieldsSchema,
  LocationFieldsSchema,
  DepartmentFieldsSchema,
  EmployeeReferenceSchema,
  DefaultBreakReferenceSchema,
  ShiftTimingFieldsSchema,
  ShiftBreakFieldsSchema,
  ShiftFlagFieldsSchema,
  PaginationResponseFieldsSchema,
  ApprovalStatusEnum,
} from "../common";

// ============================================================================
// Base Schemas
// Contains the foundational schema definitions for clocked shifts and related entities
// ============================================================================

/**
 * Break Event Schema
 * Defines the structure for break events within a clocked shift
 */
export const ShiftBreakEventSchema = BaseEntitySchema.extend({
  clockedShiftId: z.string(),
  ...ShiftBreakFieldsSchema.shape,
});

/**
 * Shift Flag Schema
 * Defines the structure for flags that can be attached to a clocked shift
 */
export const ShiftFlagSchema = BaseEntitySchema.extend({
  clockedShiftId: z.string(),
  ...ShiftFlagFieldsSchema.shape,
});

/**
 * Base Clocked Shift Schema
 * Core schema definition for a clocked shift entity
 */
export const ClockedShiftSchema = BaseEntitySchema.extend({
  employeeId: z.string(),
  ...LocationFieldsSchema.shape,
  ...DepartmentFieldsSchema.shape,
  ...BusinessSegmentFieldsSchema.shape,
  ...ShiftTimingFieldsSchema.shape,
  status: z.string(),
  approvalStatus: ApprovalStatusEnum.default("PENDING"),
  timeCategories: z.unknown().nullable(),
});

// ============================================================================
// Request Schemas
// Schemas used for various API request operations
// ============================================================================

/**
 * Create/Update Request Schemas
 */
export const CreateClockedShiftSchema = ClockedShiftSchema.omit({
  id: true,
  approvalStatus: true,
  timeCategories: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateClockedShiftSchema = CreateClockedShiftSchema.partial();

/**
 * Read/Delete Request Schemas
 */
export const GetClockedShiftByIdSchema = z.object({
  id: z.string(),
});

export const DeleteClockedShiftSchema = z.object({
  id: z.string(),
});

/**
 * List/Query Request Schema
 */
export const ListClockedShiftsQuerySchema = PaginationQuerySchema.extend({
  employeeId: z.string().optional(),
  locationId: z.string().optional(),
  departmentId: z.string().optional(),
  businessSegmentId: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  status: z.string().optional(),
  approvalStatus: ApprovalStatusEnum.optional(),
}).merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// Schemas defining the structure of API responses
// ============================================================================

/**
 * Base Response Schema
 */
export const ClockedShiftResponseSchema = ClockedShiftSchema.extend({
  employee: EmployeeReferenceSchema.unwrap(),
  location: LocationFieldsSchema.shape.location,
  department: DepartmentFieldsSchema.shape.department,
  businessSegment: BusinessSegmentFieldsSchema.shape.businessSegment,
  breaks: z.array(
    ShiftBreakEventSchema.extend({
      defaultBreak: DefaultBreakReferenceSchema.nullable(),
    })
  ),
  flags: z.array(ShiftFlagSchema),
});

/**
 * API Response Wrappers
 */
export const GetClockedShiftByIdResponseSchema = ApiResponseSchema(
  ClockedShiftResponseSchema
);

export const ListClockedShiftsResponseSchema = ApiResponseSchema(
  z.object({
    items: z.array(ClockedShiftResponseSchema),
    ...PaginationResponseFieldsSchema.shape,
  })
);

export const CreateClockedShiftResponseSchema = ApiResponseSchema(
  ClockedShiftResponseSchema
);

export const UpdateClockedShiftResponseSchema = ApiResponseSchema(
  ClockedShiftResponseSchema
);

export const DeleteClockedShiftResponseSchema = ApiResponseSchema(
  z.object({
    id: z.string(),
  })
);
