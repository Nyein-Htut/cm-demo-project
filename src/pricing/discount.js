/**
 * Discount calculation (demo)
 * Returns discountedAmount rounded to 2 decimals.
 *
 * Change request idea (CR-002):
 * - Fix rounding behavior for edge cases
 * - Add support for max discount cap
 */

function round2(n) {
  return Math.round(n * 100) / 100;
}

function applyDiscount(amount, percent) {
  if (!Number.isFinite(amount) || amount < 0) {
    return { ok: false, error: "amount must be a non-negative number" };
  }
  if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
    return { ok: false, error: "percent must be between 0 and 100" };
  }

  const discount = amount * (percent / 100);
  const discountedAmount = round2(amount - discount);

  return { ok: true, amount: round2(amount), percent: round2(percent), discountedAmount };
}

module.exports = { applyDiscount, round2 };
