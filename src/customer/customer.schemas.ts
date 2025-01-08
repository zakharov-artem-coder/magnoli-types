import { z } from "zod";
import {
  ApiResponseSchema,
  PaginationQuerySchema,
  SearchQuerySchema,
  BaseEntitySchema,
  WebsiteFieldsSchema,
  WeekSettingsFieldsSchema,
  LocationReferenceSchema,
  DepartmentReferenceSchema,
  PositionReferenceSchema,
  BusinessSegmentReferenceSchema,
  PaginationResponseFieldsSchema,
} from "../common";

// ============================================================================
// Base Schema
// ============================================================================
/**
 * Base Customer Schema
 * Defines the core structure for a customer entity including website and week settings
 */
export const CustomerSchema = BaseEntitySchema.extend({
  name: z.string(),
  ...WebsiteFieldsSchema.shape,
  ...WeekSettingsFieldsSchema.shape,
});

// ============================================================================
// Request Schemas
// ============================================================================

/**
 * Create/Update Request Schemas
 * Schemas for creating and updating customer records
 */
export const CreateCustomerSchema = CustomerSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateCustomerSchema = CreateCustomerSchema.partial();

/**
 * Read/Delete Request Schemas
 * Schemas for retrieving and removing customer records
 */
export const GetCustomerByIdSchema = z.object({
  id: z.string(),
});

export const DeleteCustomerSchema = z.object({
  id: z.string(),
});

/**
 * List/Query Request Schemas
 * Schemas for listing and querying customer records
 */
export const ListCustomersQuerySchema =
  PaginationQuerySchema.merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// ============================================================================

/**
 * Base Response Schema
 * Defines the structure for customer responses including related entities
 */
export const CustomerResponseSchema = CustomerSchema.extend({
  businessSegments: z.array(BusinessSegmentReferenceSchema.unwrap()),
  locations: z.array(LocationReferenceSchema),
  departments: z.array(DepartmentReferenceSchema.unwrap()),
  positions: z.array(PositionReferenceSchema.unwrap()),
});

/**
 * API Response Wrappers
 * Schemas that wrap the base response in the standard API format
 */
export const GetCustomerByIdResponseSchema = ApiResponseSchema(
  CustomerResponseSchema
);

export const ListCustomersResponseSchema = ApiResponseSchema(
  z.object({
    items: z.array(CustomerResponseSchema),
    ...PaginationResponseFieldsSchema.shape,
  })
);

export const CreateCustomerResponseSchema = ApiResponseSchema(
  CustomerResponseSchema
);

export const UpdateCustomerResponseSchema = ApiResponseSchema(
  CustomerResponseSchema
);

export const DeleteCustomerResponseSchema = ApiResponseSchema(
  z.object({
    id: z.string(),
  })
);
