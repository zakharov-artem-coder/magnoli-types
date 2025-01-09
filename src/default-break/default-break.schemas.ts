import { z } from "zod";
import {
  BaseEntitySchema,
  CustomerFieldsSchema,
  SearchQuerySchema,
} from "../common/common.schemas";

export const DefaultBreakSchema = BaseEntitySchema.extend({
  name: z.string(),
  isPaid: z.boolean().optional().default(false),
  setOneInHours: z.number().nullable().optional(),
  durationMin: z.number(),
  ...CustomerFieldsSchema.shape,
});

export const CreateDefaultBreakRequestSchema = DefaultBreakSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const GetDefaultBreaksRequestSchema = SearchQuerySchema;
