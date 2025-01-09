import { z } from "zod";
import {
  BusinessSegmentSchema,
  GetBusinessSegmentsRequestSchema,
  SegmentInClockedShiftSchema,
  ChangeInClockedShiftBusinessSegmentRequestSchema,
  CreateBusinessSegmentRequestSchema,
} from "./business-segment.schemas";

export type BusinessSegment = z.infer<typeof BusinessSegmentSchema>;
export type GetBusinessSegmentsRequest = z.infer<
  typeof GetBusinessSegmentsRequestSchema
>;
export type GetBusinessSegmentsResponse = BusinessSegment[];
export type CreateBusinessSegmentRequest = z.infer<
  typeof CreateBusinessSegmentRequestSchema
>;
export type CreateBusinessSegmentResponse = BusinessSegment;
export type ChangeInClockedShiftBusinessSegmentRequest = z.infer<
  typeof ChangeInClockedShiftBusinessSegmentRequestSchema
>;
export type ChangeInClockedShiftBusinessSegmentResponse = SegmentInClockedShift;

export type SegmentInClockedShift = z.infer<typeof SegmentInClockedShiftSchema>;
