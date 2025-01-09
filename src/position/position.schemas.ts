import { z } from "zod";
import {
  BaseEntitySchema,
  BusinessSegmentFieldsSchema,
  CustomerFieldsSchema,
} from "../common";

export const PositionSchema = BaseEntitySchema.extend({
  title: z.string(),
  emoji: z.string().nullable().optional(),
  ...CustomerFieldsSchema.shape,
  ...BusinessSegmentFieldsSchema.shape,
});
export const GetPositionsRequestSchema = z.object({});
export const CreatePositionRequestSchema = PositionSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  businessSegment: true,
  customer: true,
});
