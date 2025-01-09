import { z } from "zod";
import { EmployeeStatusEnum } from "../common";
import {
  EmployeeSchema,
  GetEmployeesRequestSchema,
  GetEmployeesResponseSchema,
} from "./employee.schemas";

// ============================================================================
// Base Types
// These are the fundamental types that define the core employee data structure
// ============================================================================
export type Employee = z.infer<typeof EmployeeSchema>;
export type EmployeeStatus = z.infer<typeof EmployeeStatusEnum>;

// ============================================================================
// Request Types
// Types for incoming API requests and query parameters
// ============================================================================

export type GetEmployeesRequest = z.infer<typeof GetEmployeesRequestSchema>;

// ============================================================================
// Response Types
// Types for API responses
// ============================================================================

export type GetEmployeesResponse = z.infer<typeof GetEmployeesResponseSchema>;
