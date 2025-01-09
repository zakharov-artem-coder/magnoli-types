import { z } from "zod";

// ============================ API Schemas ============================
// Base API Response Schema

export const ApiErrorResponseSchema = z.object({
  message: z.string(),
  error: z.unknown(),
});

// Common pagination query schema
export const PaginationQuerySchema = z.object({
  page: z.number().optional().default(1),
  limit: z.number().optional().default(10),
});

// Common search query schema
export const SearchQuerySchema = z.object({
  search: z.string().optional(),
});

// Common date range query schema
export const DateRangeQuerySchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

// Common sort query schema
export const SortQuerySchema = z.object({
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional().default("asc"),
});

// ============================ Entity Schemas ============================
// Common base fields that most entities have
export const BaseEntitySchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Common customer reference
export const CustomerReferenceSchema = z.object({
  id: z.string(),
  name: z.string(),
});

// Common business segment reference
export const BusinessSegmentReferenceSchema = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .nullable();

// Common location reference
export const LocationReferenceSchema = z.object({
  id: z.string(),
  title: z.string(),
});

// Common department reference
export const DepartmentReferenceSchema = z
  .object({
    id: z.string(),
    title: z.string(),
  })
  .nullable();

// Common position reference
export const PositionReferenceSchema = z
  .object({
    id: z.string(),
    title: z.string(),
  })
  .nullable();

// Common employee reference
export const EmployeeReferenceSchema = z
  .object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
  })
  .nullable();

// Common user reference
export const MagnoliUserReferenceSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

// Common employment type reference
export const EmploymentTypeReferenceSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    countOvertime: z.boolean(),
  })
  .nullable();

// Common default break reference
export const DefaultBreakReferenceSchema = z.object({
  id: z.string(),
  name: z.string(),
  isPaid: z.boolean(),
  durationMin: z.number(),
});

// Common break settings fields
export const BreakSettingsSchema = z.object({
  name: z.string(),
  isPaid: z.boolean().default(false),
  setOneInHours: z.number().nullable(),
  durationMin: z.number(),
});

// Common break schedule reference
export const BreakScheduleReferenceSchema = z.object({
  id: z.string(),
  weekDay: z.number(),
  startTime: z.string(),
  endTime: z.string(),
});

// Common time fields
export const TimeFieldsSchema = z.object({
  startTime: z.string(),
  endTime: z.string(),
});

// Common date fields
export const DateFieldsSchema = z.object({
  date: z.string(),
});

// Common website fields
export const WebsiteFieldsSchema = z.object({
  website: z.string().nullable(),
});

// Common week settings fields
export const WeekSettingsFieldsSchema = z.object({
  dayWeekStarts: z.number().default(1),
});

// Common verification fields
export const VerificationFieldsSchema = z.object({
  isVerified: z.boolean().default(false),
  verificationOtp: z.string().nullable(),
  verificationOtpExpires: z.string().nullable(),
});

// Common shift timing fields
export const ShiftTimingFieldsSchema = z.object({
  clockInTime: z.string(),
  clockOutTime: z.string().nullable(),
});

// Common shift break fields
export const ShiftBreakFieldsSchema = z.object({
  name: z.string(),
  isPaid: z.boolean().default(false),
  startTime: z.string(),
  endTime: z.string().nullable(),
  defaultBreakId: z.string().nullable(),
});

// Common shift flag fields
export const ShiftFlagFieldsSchema = z.object({
  type: z.string(),
  description: z.string().nullable(),
});

// Common business segment collections
export const BusinessSegmentCollectionsSchema = z.object({
  locations: z.array(LocationReferenceSchema),
  departments: z.array(DepartmentReferenceSchema.unwrap()),
  positions: z.array(PositionReferenceSchema.unwrap()),
});

// Common pagination response fields
export const PaginationResponseFieldsSchema = z.object({
  total: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
});

// Common business segment fields
export const BusinessSegmentFieldsSchema = z.object({
  businessSegmentId: z.string().nullable().optional(),
  businessSegment: BusinessSegmentReferenceSchema.optional(),
});

// Common customer fields
export const CustomerFieldsSchema = z.object({
  customerId: z.string(),
  customer: CustomerReferenceSchema.optional(),
});

// Common location fields
export const LocationFieldsSchema = z.object({
  locationId: z.string().nullable(),
  location: LocationReferenceSchema.nullable(),
});

// Common department fields
export const DepartmentFieldsSchema = z.object({
  departmentId: z.string().nullable(),
  department: DepartmentReferenceSchema,
});

// Common position fields
export const PositionFieldsSchema = z.object({
  positionId: z.string().nullable(),
  position: PositionReferenceSchema,
});

// Common address fields
export const AddressFieldsSchema = z.object({
  fullAddress: z.string().nullable(),
  city: z.string().nullable(),
});

// Common contact fields
export const ContactFieldsSchema = z.object({
  email: z.string().email().nullable(),
  tel: z.string().nullable(),
});

// Common work schedule fields
export const WorkScheduleFieldsSchema = z.object({
  workDays: z.array(z.number()),
  workStart: z.string().nullable(),
  workEnd: z.string().nullable(),
});
