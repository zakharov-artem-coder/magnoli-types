import { z } from "zod";
import {
  CustomerSchema,
  CreateCustomerSchema,
  GetCustomerRequestSchema,
} from "./customer.schemas";

export type Customer = z.infer<typeof CustomerSchema>;
export type GetCustomerRequest = z.infer<typeof GetCustomerRequestSchema>;
export type GetCustomerResponse = Customer;
export type CreateCustomerRequest = z.infer<typeof CreateCustomerSchema>;
export type CreateCustomerResponse = Customer;
