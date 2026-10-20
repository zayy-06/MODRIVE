/**
 * MODRIVE — Express API Server
 * Phase 1: Health-check baseline with security middleware.
 *
 * SECURITY NOTE: This is an initial baseline only. The following are NOT
 * implemented yet: authentication, authorization, database, real product
 * pricing, or server-side cart validation. Never trust client-supplied prices
 * or user roles — those will be enforced server-side in Phase 3.
 */

"use strict";

require("dotenv").config({ path: require("path").join(__dirname, "../.env") });

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || "development";

// ── Security Headers ───────────────────────────────────────────────────────────
app.use(
  helmet({
    // Allow Google Fonts and googleapis CDN used by the client
    contentSecurityPolicy: false,
  })
);

// ── CORS ───────────────────────────────────────────────────────────────────────
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Allow server-to-server requests (no origin) in development only
      if (!origin && NODE_ENV === "development") return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS: origin '${origin}' not allowed`));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ── Body Parsing (with size limit) ────────────────────────────────────────────
app.use(express.json({ limit: "64kb" }));
app.use(express.urlencoded({ extended: true, limit: "64kb" }));

// ── Routes ────────────────────────────────────────────────────────────────────

/**
 * GET /api/health
 * Returns server status. Safe to expose publicly — contains no secrets.
 */
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "modrive-api",
    phase: 1,
    environment: NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// ── 404 Handler ───────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});

// ── Central Error Handler ─────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  const isProd = NODE_ENV === "production";
  // Never leak stack traces in production
  console.error("[MODRIVE API Error]", err.message, isProd ? "" : err.stack);
  res.status(err.status || 500).json({
    status: "error",
    message: isProd ? "An internal error occurred." : err.message,
  });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`[MODRIVE API] Server running on http://localhost:${PORT}`);
  console.log(`[MODRIVE API] Environment: ${NODE_ENV}`);
  console.log(`[MODRIVE API] Health check: http://localhost:${PORT}/api/health`);
  console.log(`[MODRIVE API] Allowed origins: ${allowedOrigins.join(", ")}`);
});

module.exports = app;
