import { z } from "zod";
import {
  ApiResponseSchema,
  PaginationQuerySchema,
  SearchQuerySchema,
  BaseEntitySchema,
  CustomerFieldsSchema,
  BusinessSegmentCollectionsSchema,
  PaginationResponseFieldsSchema,
} from "../common";

// ============================================================================
// Base Schema
// ============================================================================
/**
 * Core business segment schema definition extending the base entity
 */
export const BusinessSegmentSchema = BaseEntitySchema.extend({
  name: z.string(),
  ...CustomerFieldsSchema.shape,
});

// ============================================================================
// Request Schemas
// ============================================================================

/**
 * Create/Update Request Schemas
 * --------------------------------
 */
export const CreateBusinessSegmentSchema = BusinessSegmentSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateBusinessSegmentSchema =
  CreateBusinessSegmentSchema.partial();

/**
 * Read/Delete Request Schemas
 * --------------------------------
 */
export const GetBusinessSegmentByIdSchema = z.object({
  id: z.string(),
});

export const DeleteBusinessSegmentSchema = z.object({
  id: z.string(),
});

/**
 * List/Query Request Schemas
 * --------------------------------
 */
export const ListBusinessSegmentsQuerySchema = PaginationQuerySchema.extend({
  customerId: z.string().optional(),
}).merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// ============================================================================

/**
 * Base Response Schema
 * --------------------------------
 */
export const BusinessSegmentResponseSchema = BusinessSegmentSchema.extend({
  customer: CustomerFieldsSchema.shape.customer,
  ...BusinessSegmentCollectionsSchema.shape,
});

/**
 * API Response Wrappers
 * --------------------------------
 */
export const ListBusinessSegmentsResponseSchema = ApiResponseSchema(
  z.object({
    items: z.array(BusinessSegmentResponseSchema),
    ...PaginationResponseFieldsSchema.shape,
  })
);

export const CreateBusinessSegmentResponseSchema = ApiResponseSchema(
  BusinessSegmentResponseSchema
);

export const UpdateBusinessSegmentResponseSchema = ApiResponseSchema(
  BusinessSegmentResponseSchema
);

export const DeleteBusinessSegmentResponseSchema = ApiResponseSchema(
  z.object({
    id: z.string(),
  })
);
