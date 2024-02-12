import createDeviceResponse from "./createDeviceResponse";

const unfilteredDeviceRecord = {
  deviceId: "f1b14d43-e8ca-4a4d-9d30-b0172957741c",
  userId: "e9e40",
  deviceType: "andriod",
};

describe("createDeviceResponse tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should filter opportunities array with processedDateTime field", () => {
    const expectedResponse = {
      deviceId: "f1b14d43-e8ca-4a4d-9d30-b0172957741c",
      userId: "e9e40",
      deviceType: "andriod",
    };
    expect(createDeviceResponse(unfilteredDeviceRecord)).toStrictEqual(
      expectedResponse
    );
  });
});
