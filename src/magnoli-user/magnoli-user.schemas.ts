import { z } from "zod";
import {
  PaginationQuerySchema,
  SearchQuerySchema,
  BaseEntitySchema,
  VerificationFieldsSchema,
  PaginationResponseFieldsSchema,
  MagnoliUserStatusEnum,
} from "../common";
import {
  CustomerFieldsSchema,
  ContactFieldsSchema,
} from "../common/common.schemas";

// ============================================================================
// Base Schema
// ============================================================================
/**
 * Base schema for Magnoli User entity
 * Extends BaseEntitySchema with user-specific fields
 */
export const MagnoliUserSchema = BaseEntitySchema.extend({
  name: z.string(),
  ...ContactFieldsSchema.shape,
  status: MagnoliUserStatusEnum.default("ACTIVE"),
  ...CustomerFieldsSchema.shape,
  ...VerificationFieldsSchema.shape,
});

// ============================================================================
// Request Schemas
// ============================================================================

/**
 * Create/Update Request Schemas
 * Schemas for creating and updating Magnoli users
 */
export const CreateMagnoliUserSchema = MagnoliUserSchema.omit({
  id: true,
  isVerified: true,
  verificationOtp: true,
  verificationOtpExpires: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateMagnoliUserSchema = CreateMagnoliUserSchema.partial();

/**
 * Read/Delete Request Schemas
 * Schemas for retrieving and deleting Magnoli users
 */
export const GetMagnoliUserByIdSchema = z.object({
  id: z.string(),
});

export const DeleteMagnoliUserSchema = z.object({
  id: z.string(),
});

/**
 * List/Query Request Schema
 * Schema for querying multiple Magnoli users with filters
 */
export const ListMagnoliUsersQuerySchema = PaginationQuerySchema.extend({
  customerId: z.string().optional(),
  status: MagnoliUserStatusEnum.optional(),
}).merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// ============================================================================

/**
 * Base Response Schema
 * Extends MagnoliUserSchema with additional response fields
 */
export const MagnoliUserResponseSchema = MagnoliUserSchema.extend({
  customer: CustomerFieldsSchema.shape.customer,
});
