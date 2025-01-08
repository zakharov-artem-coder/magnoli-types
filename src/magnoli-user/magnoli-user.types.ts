import { z } from "zod";
import { ApiResponse } from "../common";
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

// ============================================================================
// Response Types
// ============================================================================
/**
 * @section Single Item Response Types
 * Types for individual Magnoli User operations
 */
export type GetMagnoliUserByIdResponse = ApiResponse<MagnoliUserResponse>;
export type CreateMagnoliUserResponse = ApiResponse<MagnoliUserResponse>;
export type UpdateMagnoliUserResponse = ApiResponse<MagnoliUserResponse>;
export type DeleteMagnoliUserResponse = ApiResponse<{ id: string }>;

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

export type ListMagnoliUsersResponse =
  ApiResponse<ListMagnoliUsersResponseData>;
