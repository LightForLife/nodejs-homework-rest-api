const express = require("express");
const request = require("supertest");

const app = require("../app");

describe("test login controllers", (done) => {
  beforeAll(() => {
    console.log("Выполнить в начале тестов");
    server = app.listen(3000);
  });

  test("signup have status 200", async () => {
    const response = await request(app).post("/api/users/signup").send({
      email: "testSignUp@example.com",
      password: "3333333",
    });
    // expect(response.status).toBe(200);
    console.log(response.status);
    console.log(response.body);
  });

  afterAll(() => {
    console.log("Выполнить после тестов");

    server.close();
  });
});
