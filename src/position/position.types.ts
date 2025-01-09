import { z } from "zod";
import { PositionSchema } from "./position.schemas";
import {
  CreatePositionRequestSchema,
  GetPositionsRequestSchema,
} from "./position.schemas";

export type Position = z.infer<typeof PositionSchema>;
export type GetPositionsRequest = z.infer<typeof GetPositionsRequestSchema>;
export type GetPositionsResponse = Position[];
export type CreatePositionRequest = z.infer<typeof CreatePositionRequestSchema>;
export type CreatePositionResponse = Position;
