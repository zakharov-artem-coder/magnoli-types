import { z } from "zod";
import { ApiResponse, EmployeeStatusEnum } from "../common";
import {
  EmployeeSchema,
  EmployeeResponseSchema,
  CreateEmployeeSchema,
  UpdateEmployeeSchema,
  GetEmployeeByIdSchema,
  DeleteEmployeeSchema,
  ListEmployeesQuerySchema,
} from "./employee.schemas";

// ============================================================================
// Base Types
// These are the fundamental types that define the core employee data structure
// ============================================================================
export type Employee = z.infer<typeof EmployeeSchema>;
export type EmployeeResponse = z.infer<typeof EmployeeResponseSchema>;
export type EmployeeStatus = z.infer<typeof EmployeeStatusEnum>;

// ============================================================================
// Request Types
// Types for incoming API requests and query parameters
// ============================================================================

/**
 * Create & Update Operations
 */
export type CreateEmployeeRequest = z.infer<typeof CreateEmployeeSchema>;
export type UpdateEmployeeRequest = z.infer<typeof UpdateEmployeeSchema>;

/**
 * Read & Delete Operations
 */
export type GetEmployeeByIdRequest = z.infer<typeof GetEmployeeByIdSchema>;
export type DeleteEmployeeRequest = z.infer<typeof DeleteEmployeeSchema>;

/**
 * List/Query Operations
 */
export type ListEmployeesQuery = z.infer<typeof ListEmployeesQuerySchema>;

// ============================================================================
// Response Types
// Types for API responses, wrapped with standard API response structure
// ============================================================================

/**
 * Single Item Responses
 */
export type GetEmployeeByIdResponse = ApiResponse<EmployeeResponse>;
export type CreateEmployeeResponse = ApiResponse<EmployeeResponse>;
export type UpdateEmployeeResponse = ApiResponse<EmployeeResponse>;
export type DeleteEmployeeResponse = ApiResponse<{ id: string }>;

/**
 * List Response
 */
export type ListEmployeesResponseData = {
  items: EmployeeResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type ListEmployeesResponse = ApiResponse<ListEmployeesResponseData>;
