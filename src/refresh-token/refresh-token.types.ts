import { z } from "zod";
import {
  RefreshTokenResponseSchema,
  RefreshTokenSchema,
  RefreshTokenRequestSchema,
} from "./refresh-token.schemas";

export type RefreshToken = z.infer<typeof RefreshTokenSchema>;

export type RefreshTokenRequest = z.infer<typeof RefreshTokenRequestSchema>;
export type RefreshTokenResponse = z.infer<typeof RefreshTokenResponseSchema>;
