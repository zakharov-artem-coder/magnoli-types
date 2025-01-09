import { z } from "zod";
import { BaseEntitySchema } from "../common";

export const RefreshTokenSchema = BaseEntitySchema.extend({
  token: z.string(),
  expiresAt: z.string(),
  userId: z.string(),
});

export const RefreshTokenRequestSchema = z.object({
  refreshToken: z.string(),
});

export const RefreshTokenResponseSchema = z.object({
  refreshToken: z.string(),
  accessToken: z.string(),
});
