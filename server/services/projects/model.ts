import { z } from "@zod/zod";

const projectSchema = z.object({
	id: z.number(),
	userId: z.string(),
	title: z.string(),
	body: z.string(),
});
