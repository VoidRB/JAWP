import { Context, Router } from "@oak/oak";

const router = new Router();

router.get("/test", (ctx: Context) => {
	ctx.response.body = "this is more testing";
});

export default router;
