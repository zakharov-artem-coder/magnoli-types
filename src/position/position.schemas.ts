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
 * Defines the core position schema extending the base entity
 */
export const PositionSchema = BaseEntitySchema.extend({
  title: z.string(),
  emoji: z.string().nullable(),
  ...CustomerFieldsSchema.shape,
  ...BusinessSegmentFieldsSchema.shape,
});

// ============================================================================
// Request Schemas
// ============================================================================

/**
 * Create/Update Request Schemas
 * --------------------------------
 */
export const CreatePositionSchema = PositionSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdatePositionSchema = CreatePositionSchema.partial();

/**
 * Read/Delete Request Schemas
 * --------------------------------
 */
export const GetPositionByIdSchema = z.object({
  id: z.string(),
});

export const DeletePositionSchema = z.object({
  id: z.string(),
});

/**
 * List/Query Request Schemas
 * --------------------------------
 */
export const ListPositionsQuerySchema = PaginationQuerySchema.extend({
  customerId: z.string().optional(),
  businessSegmentId: z.string().optional(),
}).merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// ============================================================================

/**
 * Base Response Schema
 * --------------------------------
 */
export const PositionResponseSchema = PositionSchema.extend({
  customer: CustomerFieldsSchema.shape.customer,
  businessSegment: BusinessSegmentFieldsSchema.shape.businessSegment,
});

/**
 * API Response Wrappers
 * --------------------------------
 */
export const GetPositionByIdResponseSchema = ApiResponseSchema(
  PositionResponseSchema
);

export const ListPositionsResponseSchema = ApiResponseSchema(
  z.object({
    items: z.array(PositionResponseSchema),
    ...PaginationResponseFieldsSchema.shape,
  })
);

export const CreatePositionResponseSchema = ApiResponseSchema(
  PositionResponseSchema
);

export const UpdatePositionResponseSchema = ApiResponseSchema(
  PositionResponseSchema
);

export const DeletePositionResponseSchema = ApiResponseSchema(
  z.object({
    id: z.string(),
  })
);
