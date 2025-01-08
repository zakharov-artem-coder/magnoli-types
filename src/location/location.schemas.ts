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
// Defines the core location entity structure extending the base entity
// ============================================================================

export const LocationSchema = BaseEntitySchema.extend({
  title: z.string(),
  city: z.string().nullable(),
  fullAddress: z.string().nullable(),
  ...CustomerFieldsSchema.shape,
  ...BusinessSegmentFieldsSchema.shape,
});

// ============================================================================
// Request Schemas
// Schemas for handling various API request operations
// ============================================================================

/**
 * Create/Update Request Schemas
 * Defines schemas for location creation and update operations
 */
export const CreateLocationSchema = LocationSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateLocationSchema = CreateLocationSchema.partial();

/**
 * Read/Delete Request Schemas
 * Defines schemas for fetching and removing locations
 */
export const GetLocationByIdSchema = z.object({
  id: z.string(),
});

export const DeleteLocationSchema = z.object({
  id: z.string(),
});

/**
 * List/Query Request Schemas
 * Defines schemas for listing and querying locations
 */
export const ListLocationsQuerySchema = PaginationQuerySchema.extend({
  customerId: z.string().optional(),
  businessSegmentId: z.string().optional(),
}).merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// Schemas for API response handling
// ============================================================================

/**
 * Base Response Schema
 * Defines the core response structure for location data
 */
export const LocationResponseSchema = LocationSchema.extend({
  customer: CustomerFieldsSchema.shape.customer,
  businessSegment: BusinessSegmentFieldsSchema.shape.businessSegment,
});

/**
 * API Response Wrappers
 * Wraps response schemas in standard API response format
 */
export const ListLocationsResponseSchema = ApiResponseSchema(
  z.object({
    items: z.array(LocationResponseSchema),
    ...PaginationResponseFieldsSchema.shape,
  })
);

export const CreateLocationResponseSchema = ApiResponseSchema(
  LocationResponseSchema
);

export const UpdateLocationResponseSchema = ApiResponseSchema(
  LocationResponseSchema
);

export const DeleteLocationResponseSchema = ApiResponseSchema(
  z.object({
    id: z.string(),
  })
);
