import { z } from "zod";

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

// API Types
export type ApiResponse<T> = {
  success: boolean;
  data: Nullable<T>;
  message: string;
  error?: {
    code: string | number;
    details?: unknown;
  };
  metadata?: {
    timestamp: string;
    requestId?: string;
    pagination?: {
      page: number;
      limit: number;
      total: number;
      hasMore: boolean;
    };
  };
};

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
