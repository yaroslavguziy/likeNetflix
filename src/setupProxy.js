const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const { PROXY_API_TARGET, REACT_APP_TV_MAZE_API_URL } = process.env;

  app.use(
    REACT_APP_TV_MAZE_API_URL,
    createProxyMiddleware({
      target: PROXY_API_TARGET,
      changeOrigin: PROXY_API_TARGET.startsWith('https:'),
    })
  );
};
