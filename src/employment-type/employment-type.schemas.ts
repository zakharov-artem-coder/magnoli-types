import { z } from "zod";
import {
  ApiResponseSchema,
  PaginationQuerySchema,
  SearchQuerySchema,
  BaseEntitySchema,
  PaginationResponseFieldsSchema,
} from "../common";

// ============================================================================
// Base Schema
// ============================================================================
/**
 * Defines the core employment type entity structure
 */
export const EmploymentTypeSchema = BaseEntitySchema.extend({
  title: z.string(),
  countOvertime: z.boolean().default(true),
});

// ============================================================================
// Request Schemas
// ============================================================================

/**
 * Create/Update Request Schemas
 * @description Schemas for creating and updating employment types
 */
export const CreateEmploymentTypeSchema = EmploymentTypeSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateEmploymentTypeSchema = CreateEmploymentTypeSchema.partial();

/**
 * Read/Delete Request Schemas
 * @description Schemas for retrieving and deleting employment types
 */
export const GetEmploymentTypeByIdSchema = z.object({
  id: z.string(),
});

export const DeleteEmploymentTypeSchema = z.object({
  id: z.string(),
});

/**
 * List/Query Request Schemas
 * @description Schemas for listing and querying employment types
 */
export const ListEmploymentTypesQuerySchema =
  PaginationQuerySchema.merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// ============================================================================

/**
 * Base Response Schema
 * @description Core response structure for employment type data
 */
export const EmploymentTypeResponseSchema = EmploymentTypeSchema;

/**
 * API Response Wrappers
 * @description Schemas wrapped with API response structure
 */
export const ListEmploymentTypesResponseSchema = ApiResponseSchema(
  z.object({
    items: z.array(EmploymentTypeResponseSchema),
    ...PaginationResponseFieldsSchema.shape,
  })
);

export const CreateEmploymentTypeResponseSchema = ApiResponseSchema(
  EmploymentTypeResponseSchema
);

export const UpdateEmploymentTypeResponseSchema = ApiResponseSchema(
  EmploymentTypeResponseSchema
);

export const DeleteEmploymentTypeResponseSchema = ApiResponseSchema(
  z.object({
    id: z.string(),
  })
);
