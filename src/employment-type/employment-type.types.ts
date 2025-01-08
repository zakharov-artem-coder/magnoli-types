import { z } from "zod";
import { ApiResponse } from "../common";
import {
  EmploymentTypeSchema,
  EmploymentTypeResponseSchema,
  CreateEmploymentTypeSchema,
  UpdateEmploymentTypeSchema,
  GetEmploymentTypeByIdSchema,
  DeleteEmploymentTypeSchema,
  ListEmploymentTypesQuerySchema,
} from "./employment-type.schemas";

// ============================================================================
// Base Types
// ============================================================================
/**
 * Core employment type definitions
 */
export type EmploymentType = z.infer<typeof EmploymentTypeSchema>;
export type EmploymentTypeResponse = z.infer<
  typeof EmploymentTypeResponseSchema
>;

// ============================================================================
// Request Types
// ============================================================================

/**
 * Create/Update Operations
 */
export type CreateEmploymentTypeRequest = z.infer<
  typeof CreateEmploymentTypeSchema
>;
export type UpdateEmploymentTypeRequest = z.infer<
  typeof UpdateEmploymentTypeSchema
>;

/**
 * Read/Delete Operations
 */
export type GetEmploymentTypeByIdRequest = z.infer<
  typeof GetEmploymentTypeByIdSchema
>;
export type DeleteEmploymentTypeRequest = z.infer<
  typeof DeleteEmploymentTypeSchema
>;

/**
 * List/Query Operations
 */
export type ListEmploymentTypesQuery = z.infer<
  typeof ListEmploymentTypesQuerySchema
>;

// ============================================================================
// Response Types
// ============================================================================

/**
 * List Response Types
 */
export type ListEmploymentTypesResponseData = {
  items: EmploymentTypeResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

/**
 * API Response Wrappers
 */
export type ListEmploymentTypesResponse =
  ApiResponse<ListEmploymentTypesResponseData>;
export type CreateEmploymentTypeResponse = ApiResponse<EmploymentTypeResponse>;
export type UpdateEmploymentTypeResponse = ApiResponse<EmploymentTypeResponse>;
export type DeleteEmploymentTypeResponse = ApiResponse<{ id: string }>;
export type GetEmploymentTypeByIdResponse = ApiResponse<EmploymentTypeResponse>;
