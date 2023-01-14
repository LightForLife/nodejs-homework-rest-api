const express = require("express");
const request = require("supertest");

const app = require("../app");

describe("test login controllers", (done) => {
  beforeAll(() => {
    console.log("Выполнить в начале тестов");
    server = app.listen(3000);
  });

  afterAll(() => {
    console.log("Выполнить после тестов");
    server.close();
  });

  test("signup have status 200", async () => {
    const response = await request(app)
      .post("/api/users/login")
      .send({
        email: "supertest3@example.com",
        password: "333333",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    console.log(response.status);
    console.log(response.body);
  });
});
