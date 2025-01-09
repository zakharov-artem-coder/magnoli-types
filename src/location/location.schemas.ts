import { z } from "zod";
import { BaseEntitySchema } from "../common";

export const LocationSchema = BaseEntitySchema.extend({
  title: z.string(),
  city: z.string().nullable().optional(),
  fullAddress: z.string().nullable().optional(),
  customerId: z.string(),
  businessSegmentId: z.string().nullable().optional(),
});

export const GetLocationsRequestSchema = z.object({});

export const CreateLocationRequestSchema = LocationSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  businessSegmentId: true,
});
