import { z } from "zod";
import {
  ApiResponseSchema,
  PaginationQuerySchema,
  SearchQuerySchema,
  BaseEntitySchema,
  CustomerFieldsSchema,
  BusinessSegmentFieldsSchema,
  LocationFieldsSchema,
  DepartmentFieldsSchema,
  PositionFieldsSchema,
  AddressFieldsSchema,
  ContactFieldsSchema,
  WorkScheduleFieldsSchema,
  PaginationResponseFieldsSchema,
  EmployeeStatusEnum,
} from "../common";

// ============================================================================
// Base Schema
// Core schema definition for Employee entity with all its fields
// ============================================================================
export const EmployeeSchema = BaseEntitySchema.extend({
  firstName: z.string(),
  lastName: z.string(),
  status: EmployeeStatusEnum,
  gustoId: z.string().nullable(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  employmentTypeId: z.string().nullable(),
  regularRate: z.string().nullable(),
  barcode: z.string().nullable(),
  ...CustomerFieldsSchema.shape,
  ...BusinessSegmentFieldsSchema.shape,
  ...LocationFieldsSchema.shape,
  ...DepartmentFieldsSchema.shape,
  ...PositionFieldsSchema.shape,
  ...AddressFieldsSchema.shape,
  ...ContactFieldsSchema.shape,
  ...WorkScheduleFieldsSchema.shape,
});

// ============================================================================
// Request Schemas
// Validation schemas for incoming API requests
// ============================================================================

/**
 * Create & Update Operations
 */
export const CreateEmployeeSchema = EmployeeSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateEmployeeSchema = CreateEmployeeSchema.partial();

/**
 * Read & Delete Operations
 */
export const GetEmployeeByIdSchema = z.object({
  id: z.string(),
});

export const DeleteEmployeeSchema = z.object({
  id: z.string(),
});

/**
 * List/Query Operations
 */
export const ListEmployeesQuerySchema = PaginationQuerySchema.extend({
  status: EmployeeStatusEnum.optional(),
  customerId: z.string().optional(),
  departmentId: z.string().optional(),
  locationId: z.string().optional(),
  businessSegmentId: z.string().optional(),
}).merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// Schemas for API responses with expanded relationships
// ============================================================================

/**
 * Base Response Schema
 */
export const EmployeeResponseSchema = EmployeeSchema.extend({
  customer: CustomerFieldsSchema.shape.customer,
  businessSegment: BusinessSegmentFieldsSchema.shape.businessSegment,
  location: LocationFieldsSchema.shape.location,
  department: DepartmentFieldsSchema.shape.department,
  position: PositionFieldsSchema.shape.position,
  employmentType: z
    .object({
      id: z.string(),
      title: z.string(),
      countOvertime: z.boolean(),
    })
    .nullable(),
});

/**
 * API Response Wrappers
 */
export const GetEmployeeByIdResponseSchema = ApiResponseSchema(
  EmployeeResponseSchema
);
export const CreateEmployeeResponseSchema = ApiResponseSchema(
  EmployeeResponseSchema
);
export const UpdateEmployeeResponseSchema = ApiResponseSchema(
  EmployeeResponseSchema
);
export const DeleteEmployeeResponseSchema = ApiResponseSchema(
  z.object({
    id: z.string(),
  })
);

export const ListEmployeesResponseSchema = ApiResponseSchema(
  z.object({
    items: z.array(EmployeeResponseSchema),
    ...PaginationResponseFieldsSchema.shape,
  })
);
