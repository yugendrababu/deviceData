import app from "./app";
import server from "./index";


jest.mock("./app", () => ({
  listen: jest.fn(),
}));

describe("index", () => {
  it("should start to listen on given port and log the status", () => {
    expect(server).toBe(app);
  });
});
