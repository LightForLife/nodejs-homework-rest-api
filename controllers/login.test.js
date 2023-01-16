const express = require("express");
const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../app");
const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

describe("test login controller", () => {
  beforeAll(() => {
    // console.log("Run before tests");
    mongoose.connect(DB_HOST);
  });

  afterAll(() => {
    // console.log("Run after tests");
    mongoose.connection.close();
  });

  test("response must have status code 200, should return a token, should return a user object with 2 fields email and subscription, both of data type String", async () => {
    const response = await request(app)
      .post("/api/users/login")
      .send({
        email: "supertest5@example.com",
        password: "555555",
      })
      .set("Accept", "application/json");

    const { token } = response.body;

    expect(response.status).toBe(200);

    expect(token).toBeDefined();

    expect(response.body).toMatchObject({
      token: expect.any(String),
      user: {
        email: expect.any(String),
        subscription: expect.any(String),
      },
    });

    // expect(response.body).toHaveProperty("user", {
    //   email: "supertest5@example.com",
    //   subscription: "starter",
    // });

    // expect(response.body.user).toEqual({
    //   email: "supertest5@example.com",
    //   subscription: "starter",
    // });
  });
});
