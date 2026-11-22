// Thoth — local development server (NOT used on Vercel).
//
// Wraps the exact same request handler the Vercel function runs
// (lib/app.js) in a plain Node HTTP server, so the standalone can be
// tried locally with `npm start`. Without DATABASE_URL /
// BLOB_READ_WRITE_TOKEN it stores data in local files under ./data.

"use strict";

const http = require("node:http");
const { handleRequest } = require("./lib/app");

const PORT = Number(process.env.PORT || 3000);

http
  .createServer((req, res) => {
    void handleRequest(req, res);
  })
  .listen(PORT, () => {
    console.log(`Thoth standalone (local) listening on port ${PORT}`);
  });
