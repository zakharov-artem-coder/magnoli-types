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
import {
  BreakSettingsSchema,
  TimeFieldsSchema,
  DateFieldsSchema,
  BreakScheduleReferenceSchema,
} from "../common/common.schemas";

// ============================================================================
// Base Schema
// ============================================================================
/**
 * Base schema for Default Break entities
 * Extends the base entity schema with break settings and customer fields
 */
export const DefaultBreakSchema = BaseEntitySchema.extend({
  ...BreakSettingsSchema.shape,
  ...CustomerFieldsSchema.shape,
});

// ============================================================================
// Request Schemas
// ============================================================================

/**
 * Create/Update Request Schemas
 * ---------------------------
 */
export const CreateDefaultBreakSchema = DefaultBreakSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateDefaultBreakSchema = CreateDefaultBreakSchema.partial();

/**
 * Read/Delete Request Schemas
 * -------------------------
 */
export const GetDefaultBreakByIdSchema = z.object({
  id: z.string(),
});

export const DeleteDefaultBreakSchema = z.object({
  id: z.string(),
});

/**
 * List/Query Request Schemas
 * ------------------------
 */
export const ListDefaultBreaksQuerySchema = PaginationQuerySchema.extend({
  customerId: z.string().optional(),
}).merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// ============================================================================

/**
 * Base Response Schema
 * -------------------
 */
export const DefaultBreakResponseSchema = DefaultBreakSchema.extend({
  customer: CustomerFieldsSchema.shape.customer,
  scheduledShifts: z.array(
    z.object({
      id: z.string(),
      ...DateFieldsSchema.shape,
      ...TimeFieldsSchema.shape,
    })
  ),
  defaultSchedules: z.array(BreakScheduleReferenceSchema),
});

/**
 * API Response Wrappers
 * --------------------
 */
export const GetDefaultBreakByIdResponseSchema = ApiResponseSchema(
  DefaultBreakResponseSchema
);

export const ListDefaultBreaksResponseSchema = ApiResponseSchema(
  z.object({
    items: z.array(DefaultBreakResponseSchema),
    ...PaginationResponseFieldsSchema.shape,
  })
);

export const CreateDefaultBreakResponseSchema = ApiResponseSchema(
  DefaultBreakResponseSchema
);

export const UpdateDefaultBreakResponseSchema = ApiResponseSchema(
  DefaultBreakResponseSchema
);

export const DeleteDefaultBreakResponseSchema = ApiResponseSchema(
  z.object({
    id: z.string(),
  })
);
