import { z } from "zod";
import { ApiResponse } from "../common";
import {
  LocationSchema,
  LocationResponseSchema,
  CreateLocationSchema,
  UpdateLocationSchema,
  GetLocationByIdSchema,
  DeleteLocationSchema,
  ListLocationsQuerySchema,
} from "./location.schemas";

//============================================================================
// Base Types
//============================================================================
/**
 * Core location type definitions
 */
export type Location = z.infer<typeof LocationSchema>;
export type LocationResponse = z.infer<typeof LocationResponseSchema>;

//============================================================================
// Request Types
//============================================================================
/**
 * Create/Update Request Types
 */
export type CreateLocationRequest = z.infer<typeof CreateLocationSchema>;
export type UpdateLocationRequest = z.infer<typeof UpdateLocationSchema>;

/**
 * Read/Delete Request Types
 */
export type GetLocationByIdRequest = z.infer<typeof GetLocationByIdSchema>;
export type DeleteLocationRequest = z.infer<typeof DeleteLocationSchema>;

/**
 * List/Query Request Types
 */
export type ListLocationsQuery = z.infer<typeof ListLocationsQuerySchema>;

//============================================================================
// Response Types
//============================================================================
/**
 * List Response Types
 */
export type ListLocationsResponseData = {
  items: LocationResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

/**
 * API Response Wrappers
 */
export type ListLocationsResponse = ApiResponse<ListLocationsResponseData>;
export type CreateLocationResponse = ApiResponse<LocationResponse>;
export type UpdateLocationResponse = ApiResponse<LocationResponse>;
export type DeleteLocationResponse = ApiResponse<{ id: string }>;
export type GetLocationByIdResponse = ApiResponse<LocationResponse>;
