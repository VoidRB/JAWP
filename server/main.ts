import { Application } from "@oak/oak/application";
import { Router } from "@oak/oak/router";
import testRouter from "./routes/routes.ts";

const router = new Router();
router.get("/", (ctx) => {
	ctx.response.body = "test";
});

const app = new Application();
app.use(router.routes());
app.use(testRouter.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
