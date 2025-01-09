import { z } from "zod";
import {
  CreateDefaultBreakRequestSchema,
  GetDefaultBreaksRequestSchema,
  DefaultBreakSchema,
} from "./default-break.schemas";

export type DefaultBreak = z.infer<typeof DefaultBreakSchema>;

export type CreateDefaultBreakRequest = z.infer<
  typeof CreateDefaultBreakRequestSchema
>;
export type CreateDefaultBreakResponse = DefaultBreak;

export type GetDefaultBreaksRequest = z.infer<
  typeof GetDefaultBreaksRequestSchema
>;
export type GetDefaultBreaksResponse = Array<DefaultBreak>;
