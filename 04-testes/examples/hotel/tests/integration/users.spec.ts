import { describe, expect, it } from "vitest";
import supertest from "supertest";

import { app } from "src";
import { faker } from "@faker-js/faker";

const request = supertest(app)

describe("User", () => {
  it("should be able to create an user", async () => {
    const payloadMock = {
      "password": "1234",
      "email": faker.internet.email(),
      "name": "Victor"
    }

    const result = await request
      .post("/users")
      .send(payloadMock)
      .set('Accept', 'application/json')

    expect(result.status).toStrictEqual(201)
    expect(result.body._id).toBeTruthy()
  })
})