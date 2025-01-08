import { z } from "zod";

// Employee Status
export const EmployeeStatusEnum = z.enum([
  "ACTIVE",
  "INACTIVE",
  "TERMINATED",
  "ON_LEAVE",
]);

// Shift Source
export const ShiftSourceEnum = z.enum(["DEFAULT", "MANUAL"]);

// Magnoli User Status
export const MagnoliUserStatusEnum = z.enum([
  "ACTIVE",
  "INACTIVE",
  "SUSPENDED",
]);

// Shift Status
export const ShiftStatusEnum = z.enum(["IN_PROGRESS", "COMPLETED"]);

// Shift Flag Type
export const ShiftFlagTypeEnum = z.enum([
  "LATE_CLOCK_IN",
  "EARLY_CLOCK_OUT",
  "MISSED_BREAK",
  "OVERTIME",
  "INCOMPLETE_SHIFT",
  "UNSCHEDULED_SHIFT",
]);

// Approval Status
export const ApprovalStatusEnum = z.enum([
  "PENDING",
  "APPROVED",
  "DELETED",
  "INQUIRIES",
]);
