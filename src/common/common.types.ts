import { z } from "zod";
import { ApiErrorResponseSchema } from "./common.schemas";

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

export type ApiErrorResponse = z.infer<typeof ApiErrorResponseSchema>;

// Common Query Types
export type PaginationQuery = {
  page?: number;
  limit?: number;
};

export type SearchQuery = {
  search?: string;
};

export type DateRangeQuery = {
  startDate?: string;
  endDate?: string;
};

export type SortQuery = {
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};
