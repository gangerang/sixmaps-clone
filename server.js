// server.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const ROOT = path.resolve(__dirname, "maps.six.nsw.gov.au");
const app = express();

const port = process.env.PORT || 8080;

// serve local files if present
app.use(express.static(ROOT, { fallthrough: true }));

// proxy fallback with enhanced logging and an env toggle for TLS verification
const proxyTarget = process.env.PROXY_TARGET || "https://maps.six.nsw.gov.au";
const proxySecure = typeof process.env.PROXY_SECURE !== 'undefined' ? (process.env.PROXY_SECURE === 'true') : true;

app.use("/", createProxyMiddleware({
  target: proxyTarget,
  changeOrigin: true,
  secure: proxySecure,
  logLevel: "debug",
  onProxyReq: (proxyReq, req, res) => {
    console.log('[proxy] req ->', req.method, req.originalUrl, 'host->', proxyReq.getHeader('host'));
  },
  onProxyRes: (proxyRes, req, res) => {
    console.log('[proxy] res <-', req.method, req.originalUrl, 'status->', proxyRes.statusCode);
  },
  onError: (err, req, res) => {
    console.error('[proxy] error for', req.originalUrl, err && err.message);
    if (!res.headersSent) {
      res.writeHead(502, { 'Content-Type': 'text/plain' });
    }
    try { res.end('Bad gateway.'); } catch (e) { /* ignore */ }
  }
}));

app.listen(port, () => console.log(`Listening on port ${port}`));