import {
  addDeviceDetail,
  getDeviceByUserId,
  getDeviceByDeviceId,
  updateDeviceDetail,
} from "./deviceQueries";
import deviceModel from "../deviceModel";

jest.mock("../deviceModel", () => ({
  create: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  findOneAndUpdate: jest.fn(),
}));

describe("Device Queries", () => {
  const mockData = { mock: "data" };
  const mockIdFields = { __v: 0, _id: 0 };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should addDeviceDetail return correct result", async () => {
    deviceModel.create.mockResolvedValue(mockData);
    const result = await addDeviceDetail(mockData);
    expect(result).toEqual(mockData);
    expect(deviceModel.create).toHaveBeenCalledWith(mockData);
  });

  it("should getDeviceByUserId return correct result ", async () => {
    const userId = "e9e404a24d4642ecba3e1a595e86f9db";
    deviceModel.find.mockResolvedValue(mockData);
    const result = await getDeviceByUserId(userId);
    expect(result).toEqual(mockData);
    expect(deviceModel.find).toHaveBeenCalledWith({ userId }, mockIdFields);
  });

  it("should getDeviceByDeviceId return correct result", async () => {
    const deviceId = "e9e40";
    const mockDeviceId = { deviceId: "e9e40" };
    deviceModel.findOne.mockResolvedValue(mockData);
    const result = await getDeviceByDeviceId(deviceId);
    expect(result).toEqual(mockData);
    expect(deviceModel.findOne).toHaveBeenCalledWith(mockDeviceId);
  });

  it("should updateDeviceDetail return correct result", async () => {
    const deviceId = { deviceId: "abc" };

    deviceModel.findOneAndUpdate.mockResolvedValue(mockData);
    const result = await updateDeviceDetail(deviceId, mockData);
    expect(result).toEqual(mockData);
  });
});
