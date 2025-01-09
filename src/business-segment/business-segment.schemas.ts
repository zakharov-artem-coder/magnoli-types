import { z } from "zod";
import { BaseEntitySchema, CustomerFieldsSchema } from "../common";

export const BusinessSegmentSchema = BaseEntitySchema.extend({
  name: z.string(),
  ...CustomerFieldsSchema.shape,
});
export const GetBusinessSegmentsRequestSchema = z.object({});
export const CreateBusinessSegmentRequestSchema = BusinessSegmentSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  customer: true,
});

export const ChangeInClockedShiftBusinessSegmentRequestSchema = z.object({
  clockedShiftId: z.string(),
  setSegmentTo: z.string().optional(),
  employeeId: z.string().optional(),
});

export const SegmentInClockedShiftSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  clockedShiftId: z.string(),
  setSegmentTo: z.string().nullable(),
  employeeId: z.string().nullable(),
  date: z.date(),
});
