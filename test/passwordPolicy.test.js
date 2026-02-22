const { validatePassword } = require("../src/auth/passwordPolicy");

test("rejects too short password", () => {
  const r = validatePassword("a1");
  expect(r.ok).toBe(false);
  expect(r.errors.join(" ")).toMatch(/at least 8/);
});

test("accepts a valid password", () => {
  const r = validatePassword("abc12345");
  expect(r.ok).toBe(true);
  expect(r.errors).toHaveLength(0);
});
