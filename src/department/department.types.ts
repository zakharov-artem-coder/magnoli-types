import { z } from "zod";
import {
  CreateDepartmentRequestSchema,
  DepartmentSchema,
  GetDepartmentsRequestSchema,
} from "./department.schemas";

export type Department = z.infer<typeof DepartmentSchema>;
export type GetDepartmentsRequest = z.infer<typeof GetDepartmentsRequestSchema>;
export type GetDepartmentsResponse = Department[];
export type CreateDepartmentRequest = z.infer<
  typeof CreateDepartmentRequestSchema
>;
export type CreateDepartmentResponse = Department;
