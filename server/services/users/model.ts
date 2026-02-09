import { z } from "@zod/zod";

const userSchema = z.object({
	id: z.number(),
	username: z.string(),
	hashedPassword: z.string(),
});
