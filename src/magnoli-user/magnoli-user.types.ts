import { z } from "zod";
import {
  MagnoliUserSchema,
  MagnoliUserResponseSchema,
  CreateMagnoliUserSchema,
  UpdateMagnoliUserSchema,
  GetMagnoliUserByIdSchema,
  DeleteMagnoliUserSchema,
  ListMagnoliUsersQuerySchema,
} from "./magnoli-user.schemas";

// ============================================================================
// Base Types
// ============================================================================
/**
 * Core data types representing the fundamental Magnoli User structure
 */
export type MagnoliUser = z.infer<typeof MagnoliUserSchema>;
export type MagnoliUserResponse = z.infer<typeof MagnoliUserResponseSchema>;

// ============================================================================
// Request Types
// ============================================================================
/**
 * @section Create/Update Request Types
 * Types for creating and modifying Magnoli Users
 */
export type CreateMagnoliUserRequest = z.infer<typeof CreateMagnoliUserSchema>;
export type UpdateMagnoliUserRequest = z.infer<typeof UpdateMagnoliUserSchema>;

/**
 * @section Read/Delete Request Types
 * Types for retrieving and removing Magnoli Users
 */
export type GetMagnoliUserByIdRequest = z.infer<
  typeof GetMagnoliUserByIdSchema
>;
export type DeleteMagnoliUserRequest = z.infer<typeof DeleteMagnoliUserSchema>;

/**
 * @section List/Query Request Types
 * Types for querying multiple Magnoli Users
 */
export type ListMagnoliUsersQuery = z.infer<typeof ListMagnoliUsersQuerySchema>;

/**
 * @section List Response Types
 * Types for handling multiple Magnoli Users
 */
export type ListMagnoliUsersResponseData = {
  items: MagnoliUserResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};
