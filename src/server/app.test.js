/* eslint-disable jest/expect-expect */

import supertest from "supertest";
import { StatusCodes } from "http-status-codes";
import app from "./app";

const request = supertest(app);

jest.mock("../services/mongoDb",()=>{
  return{
    mongoDbConnect:jest.fn()
  }
})

describe("health routes", () => {
  describe("GET /ping", () => {
    it("should return HTTP 200", async () => {
      await request.get("/ping").expect(StatusCodes.OK);
    });
  });

  describe("GET /health", () => {
    it("should return the service status", async () => {
      await request
        .get("/health")
        .expect(StatusCodes.OK, { health: { app: "ok" } });
    });
  });
});
