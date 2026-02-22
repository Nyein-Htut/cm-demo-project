const { applyDiscount } = require("../src/pricing/discount");

test("applies 10% discount", () => {
  const r = applyDiscount(1000, 10);
  expect(r.ok).toBe(true);
  expect(r.discountedAmount).toBe(900);
});

test("rejects invalid percent", () => {
  const r = applyDiscount(100, 120);
  expect(r.ok).toBe(false);
});
