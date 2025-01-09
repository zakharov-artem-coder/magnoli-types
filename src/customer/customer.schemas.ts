import { z } from "zod";
import {
  BaseEntitySchema,
  WebsiteFieldsSchema,
  WeekSettingsFieldsSchema,
} from "../common";

export const CustomerSchema = BaseEntitySchema.extend({
  name: z.string(),
  ...WebsiteFieldsSchema.shape,
  ...WeekSettingsFieldsSchema.shape,
});
export const GetCustomerRequestSchema = z.object({});

export const CreateCustomerSchema = CustomerSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
