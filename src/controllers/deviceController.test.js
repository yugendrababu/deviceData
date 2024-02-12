import {
  getDeviceChannelData,
  registerDeviceChannel,
  updateDeviceChannel,
  getDeviceDataByDeviceId,
} from "../services/deviceService";
import {
  getDeviceData,
  registerDevice,
  updateDevice,
} from "./deviceController";

jest.mock("../services/deviceService", () => ({
  getDeviceChannelData: jest.fn(),
  registerDeviceChannel: jest.fn(),
  updateDeviceChannel: jest.fn(),
  getDeviceDataByDeviceId: jest.fn(),
}));

const deviceId = "727fb3bb-251c-ee5c-8d09-0f60c5f2db1c";
const userId = "e9e404a24d4642ecba3e1a595e86f9db";


const response = {
  _id: "a73a8c49-8326-4d78-83a4-b52a1ace6df6",
  deviceId,
  userId,
  deviceType: "andriod",
};

const registerDeviceResponse = {
  deviceId,
  userId,
  deviceType: "andriod",
};

describe("Device Controller", () => {
  let res;
  const next = jest.fn();

  beforeEach(() => {
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  });

  it("should get 500 type error for device data", () => {
    getDeviceChannelData.mockReturnValueOnce([response]);
    getDeviceData(null, res, next);
    expect(next).toHaveBeenCalledWith(
      new TypeError("Cannot read properties of null (reading 'query')")
    );
  });

  it("should get correct result for device data", async () => {
    const req = {
      query: { userid: "e9e404a24d4642ecba3e1a595e86f9db", "push-pref": true },
    };
    getDeviceChannelData.mockReturnValueOnce([response]);
    await getDeviceData(req, res, next);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      registeredDevices: [response],
    });
  });

  it("should register device no deviceId in request body", async () => {
    const req = {
      body: {
        userId,
        deviceType: "andriod",
      },
      query: {
        locale: "en-GB",
      },
    };

    registerDeviceChannel.mockReturnValueOnce(registerDeviceResponse);
    await registerDevice(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(registerDeviceResponse);
  });

  it("should register device deviceId in request body", async () => {
    const req = {
      body: {
        deviceId,
        userId,
        deviceType: "andriod",
      },
      query: {
        locale: "en-GB",
      },
    };

    getDeviceDataByDeviceId.mockReturnValueOnce(registerDeviceResponse);
    await registerDevice(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(registerDeviceResponse);
  });

  it("should update registered device", async () => {
    const req = {
      body: {
        deviceId,
        userId,
        deviceType: "android",
      },
      query: {
        locale: "en-GB",
      },
    };

    updateDeviceChannel.mockReturnValueOnce(registerDeviceResponse);
    await updateDevice(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(registerDeviceResponse);
  });
});
