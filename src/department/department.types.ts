import { z } from "zod";
import { ApiResponse } from "../common";
import {
  DepartmentSchema,
  DepartmentResponseSchema,
  CreateDepartmentSchema,
  UpdateDepartmentSchema,
  GetDepartmentByIdSchema,
  DeleteDepartmentSchema,
  ListDepartmentsQuerySchema,
} from "./department.schemas";

// ============================================================================
// Base Types
// Contains the core data structure types for departments
// ============================================================================

export type Department = z.infer<typeof DepartmentSchema>;
export type DepartmentResponse = z.infer<typeof DepartmentResponseSchema>;

// ============================================================================
// Request Types
// Types for all department-related API requests
// ============================================================================

/**
 * Create/Update Request Types
 * Types for creating and modifying departments
 */
export type CreateDepartmentRequest = z.infer<typeof CreateDepartmentSchema>;
export type UpdateDepartmentRequest = z.infer<typeof UpdateDepartmentSchema>;

/**
 * Read/Delete Request Types
 * Types for retrieving and removing departments
 */
export type GetDepartmentByIdRequest = z.infer<typeof GetDepartmentByIdSchema>;
export type DeleteDepartmentRequest = z.infer<typeof DeleteDepartmentSchema>;

/**
 * List/Query Request Types
 * Types for listing and querying departments
 */
export type ListDepartmentsQuery = z.infer<typeof ListDepartmentsQuerySchema>;

// ============================================================================
// Response Types
// Types for all department-related API responses
// ============================================================================

/**
 * List Response Types
 * Types for paginated list responses
 */
export type ListDepartmentsResponseData = {
  items: DepartmentResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

/**
 * API Response Types
 * Wrapped response types for all department operations
 */
export type ListDepartmentsResponse = ApiResponse<ListDepartmentsResponseData>;
export type CreateDepartmentResponse = ApiResponse<DepartmentResponse>;
export type UpdateDepartmentResponse = ApiResponse<DepartmentResponse>;
export type DeleteDepartmentResponse = ApiResponse<{ id: string }>;
export type GetDepartmentByIdResponse = ApiResponse<DepartmentResponse>;
