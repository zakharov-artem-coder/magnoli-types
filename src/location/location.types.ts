import { z } from "zod";
import {
  LocationSchema,
  GetLocationsRequestSchema,
  CreateLocationRequestSchema,
} from "./location.schemas";

export type Location = z.infer<typeof LocationSchema>;

export type GetLocationsRequest = z.infer<typeof GetLocationsRequestSchema>;
export type GetLocationsResponse = Location[];

export type CreateLocationRequest = z.infer<typeof CreateLocationRequestSchema>;
export type CreateLocationResponse = Location;
