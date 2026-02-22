const request = require("supertest");
const app = require("../src/server");

test("GET /health returns ok", async () => {
  const res = await request(app).get("/health");
  expect(res.status).toBe(200);
  expect(res.body.ok).toBe(true);
});

test("POST /auth/validate rejects weak password", async () => {
  const res = await request(app).post("/auth/validate").send({ password: "short1" });
  expect(res.status).toBe(400);
  expect(res.body.ok).toBe(false);
});
