const express = require("express");
const request = require("supertest");

const controllers = require("./auth");

const app = express();

app.post("/users/signup", controllers.reqister);

describe("test signup controllers", () => {
  beforeAll(async () => {
    server = app.listen(3001);
  });

  afterEach(async () => {
    await server.close();
  });

  test("signup return products object", async () => {
    const response = await request(app).get("/users/signup");
    console.log(response.status);
  });
});
