import { z } from "@zod/zod";

export const sessionSchema = z.object({
	id: z.number(),
	ip: z.string(),
	userAgent: z.string(),
	token: z.string(),
	userId: z.number(),
});
