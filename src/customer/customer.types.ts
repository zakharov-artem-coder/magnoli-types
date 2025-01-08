import { z } from "zod";
import { ApiResponse } from "../common";
import {
  CustomerSchema,
  CustomerResponseSchema,
  CreateCustomerSchema,
  UpdateCustomerSchema,
  GetCustomerByIdSchema,
  DeleteCustomerSchema,
  ListCustomersQuerySchema,
} from "./customer.schemas";

// ============================================================================
// Base Types
// ============================================================================
/**
 * Core customer data types used throughout the application
 */
export type Customer = z.infer<typeof CustomerSchema>;
export type CustomerResponse = z.infer<typeof CustomerResponseSchema>;

// ============================================================================
// Request Types
// ============================================================================
/**
 * Types for Create/Update operations
 */
export type CreateCustomerRequest = z.infer<typeof CreateCustomerSchema>;
export type UpdateCustomerRequest = z.infer<typeof UpdateCustomerSchema>;

/**
 * Types for Read/Delete operations
 */
export type GetCustomerByIdRequest = z.infer<typeof GetCustomerByIdSchema>;
export type DeleteCustomerRequest = z.infer<typeof DeleteCustomerSchema>;

/**
 * Types for List/Query operations
 */
export type ListCustomersQuery = z.infer<typeof ListCustomersQuerySchema>;

// ============================================================================
// Response Types
// ============================================================================
/**
 * Single Item Response Types
 */
export type GetCustomerByIdResponse = ApiResponse<CustomerResponse>;
export type CreateCustomerResponse = ApiResponse<CustomerResponse>;
export type UpdateCustomerResponse = ApiResponse<CustomerResponse>;
export type DeleteCustomerResponse = ApiResponse<{ id: string }>;

/**
 * List Response Types
 */
export type ListCustomersResponseData = {
  items: CustomerResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type ListCustomersResponse = ApiResponse<ListCustomersResponseData>;
