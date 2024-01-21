const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://humil-a8debfc8410b.herokuapp.com",
      changeOrigin: true,
    })
  );
};
