import { z } from "zod";
import {
  ApiResponseSchema,
  PaginationQuerySchema,
  SearchQuerySchema,
  BaseEntitySchema,
  CustomerFieldsSchema,
  BusinessSegmentFieldsSchema,
  PaginationResponseFieldsSchema,
} from "../common";

// ============================================================================
// Base Schema
// ============================================================================
/**
 * Core department schema definition extending the base entity schema
 */
export const DepartmentSchema = BaseEntitySchema.extend({
  title: z.string(),
  ...CustomerFieldsSchema.shape,
  ...BusinessSegmentFieldsSchema.shape,
});

// ============================================================================
// Request Schemas
// ============================================================================

/**
 * Create/Update Request Schemas
 * ---------------------------
 */
export const CreateDepartmentSchema = DepartmentSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateDepartmentSchema = CreateDepartmentSchema.partial();

/**
 * Read/Delete Request Schemas
 * -------------------------
 */
export const GetDepartmentByIdSchema = z.object({
  id: z.string(),
});

export const DeleteDepartmentSchema = z.object({
  id: z.string(),
});

/**
 * List/Query Request Schemas
 * ------------------------
 */
export const ListDepartmentsQuerySchema = PaginationQuerySchema.extend({
  customerId: z.string().optional(),
  businessSegmentId: z.string().optional(),
}).merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// ============================================================================

/**
 * Base Response Schema
 * ------------------
 */
export const DepartmentResponseSchema = DepartmentSchema.extend({
  customer: CustomerFieldsSchema.shape.customer,
  businessSegment: BusinessSegmentFieldsSchema.shape.businessSegment,
});

/**
 * API Response Wrappers
 * -------------------
 */
export const ListDepartmentsResponseSchema = ApiResponseSchema(
  z.object({
    items: z.array(DepartmentResponseSchema),
    ...PaginationResponseFieldsSchema.shape,
  })
);

export const CreateDepartmentResponseSchema = ApiResponseSchema(
  DepartmentResponseSchema
);

export const UpdateDepartmentResponseSchema = ApiResponseSchema(
  DepartmentResponseSchema
);

export const DeleteDepartmentResponseSchema = ApiResponseSchema(
  z.object({
    id: z.string(),
  })
);
