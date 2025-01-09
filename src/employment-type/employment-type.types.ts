import { z } from "zod";
import {
  EmploymentTypeSchema,
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
