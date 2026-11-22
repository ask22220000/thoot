// Melegy AI — Vercel Serverless Function entry point.
//
// This catch-all function receives every /api/* request (chats,
// messages, images, documents, transcribe, speak) and forwards it to
// the shared request handler in ../lib/app.js. The UI in ../public
// is served by Vercel as static files; it is never routed here.
//
// bodyParser is disabled so the handler reads the raw request stream
// itself (document uploads arrive as base64 JSON and must not be
// pre-parsed or size-capped by the platform's JSON parser).

"use strict";

const { handleRequest } = require("../lib/app");

module.exports = handleRequest;
module.exports.config = {
  api: { bodyParser: false },
};
