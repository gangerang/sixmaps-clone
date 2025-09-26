// server.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const ROOT = path.resolve(__dirname, "maps.six.nsw.gov.au");
const app = express();

const port = process.env.PORT || 8080;

// serve local files if present
app.use(express.static(ROOT, { fallthrough: true }));

// proxy fallback
app.use("/", createProxyMiddleware({
  target: "https://maps.six.nsw.gov.au",
  changeOrigin: true,
  secure: true,
  logLevel: "debug"
}));

app.listen(port, () => console.log(`Listening on port ${port}`));