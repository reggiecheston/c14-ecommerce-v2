const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/humil",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: false,
    })
  );
};
