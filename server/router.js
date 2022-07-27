const Router = require("koa-router");
const bodyPaser = require("koa-bodyparser");

function routerInit(app) {
  const router = new Router();

  router.use(bodyPaser());

  router.get("/api/getWin", async (ctx) => {
    ctx.body = 'win';
  });

  router.post("/api/setWin", async (ctx) => {
    // win = JSON.parse(ctx.request.body.win);
    ctx.body = "success";
  });

  app.use(router.routes()).use(router.allowedMethods());
}

module.exports = routerInit;
