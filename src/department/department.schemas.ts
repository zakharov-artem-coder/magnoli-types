import { z } from "zod";
import {
  BaseEntitySchema,
  CustomerFieldsSchema,
  BusinessSegmentFieldsSchema,
} from "../common";

export const DepartmentSchema = BaseEntitySchema.extend({
  title: z.string(),
  ...CustomerFieldsSchema.shape,
  ...BusinessSegmentFieldsSchema.shape,
});
export const GetDepartmentsRequestSchema = z.object({});

export const CreateDepartmentRequestSchema = DepartmentSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  customer: true,
  businessSegment: true,
});
