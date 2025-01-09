import { z } from "zod";
import {
  ApiResponseSchema,
  PaginationQuerySchema,
  SearchQuerySchema,
  BaseEntitySchema,
  CustomerFieldsSchema,
  BusinessSegmentFieldsSchema,
  LocationFieldsSchema,
  DepartmentFieldsSchema,
  PositionFieldsSchema,
  AddressFieldsSchema,
  ContactFieldsSchema,
  WorkScheduleFieldsSchema,
  PaginationResponseFieldsSchema,
  EmployeeStatusEnum,
  EmploymentTypeReferenceSchema,
} from "../common";

// ============================================================================
// Base Schema
// Core schema definition for Employee entity with all its fields
// ============================================================================
export const EmployeeSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  status: EmployeeStatusEnum,
  gustoId: z.string().nullable(),
  startDate: z.date().nullable(),
  endDate: z.date().nullable(),
  employmentTypeId: z.string().nullable(),
  regularRate: z.string().nullable(),
  barcode: z.string().nullable(),
  customerId: z.string(),
  businessSegmentId: z.string().nullable(),
  locationId: z.string().nullable(),
  departmentId: z.string().nullable(),
  positionId: z.string().nullable(),
  email: z.string().nullable(),
  tel: z.string().nullable(),
  city: z.string().nullable(),
  fullAddress: z.string().nullable(),
  workStart: z.string().nullable(),
  workEnd: z.string().nullable(),
  workDays: z.array(z.number()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// ============================================================================
// Request Schemas
// Validation schemas for incoming API requests
// ============================================================================

/**
 * List/Query Operations
 */
export const GetEmployeesRequestSchema = z
  .object({
    status: EmployeeStatusEnum.optional(),
    customerId: z.string().optional(),
    departmentId: z.string().optional(),
    locationId: z.string().optional(),
    businessSegmentId: z.string().optional(),
  })
  .merge(SearchQuerySchema);

// ============================================================================
// Response Schemas
// Schemas for API responses with expanded relationships
// ============================================================================

/**
 * Base Response Schema
 */
export const GetEmployeesResponseSchema = z.array(
  EmployeeSchema.extend({
    customer: CustomerFieldsSchema.shape.customer,
    businessSegment: BusinessSegmentFieldsSchema.shape.businessSegment,
    location: LocationFieldsSchema.shape.location,
    department: DepartmentFieldsSchema.shape.department,
    position: PositionFieldsSchema.shape.position,
    employmentType: EmploymentTypeReferenceSchema,
  })
);
