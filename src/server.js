const express = require("express");
const { validatePassword } = require("./auth/passwordPolicy");
const { applyDiscount } = require("./pricing/discount");

const app = express();
app.use(express.json());

/**
 * Health check
 */
app.get("/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

/**
 * Demo auth validation endpoint
 * POST /auth/validate { password: "..." }
 */
app.post("/auth/validate", (req, res) => {
  const password = String(req.body?.password ?? "");
  const result = validatePassword(password);
  res.status(result.ok ? 200 : 400).json(result);
});

/**
 * Demo pricing endpoint
 * POST /pricing/discount { amount: 1000, percent: 10 }
 */
app.post("/pricing/discount", (req, res) => {
  const amount = Number(req.body?.amount ?? 0);
  const percent = Number(req.body?.percent ?? 0);
  const out = applyDiscount(amount, percent);
  res.json(out);
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
}

module.exports = app;
