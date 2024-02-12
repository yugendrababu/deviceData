import deviceModel from "../deviceModel";

export const addDeviceDetail = async (deviceData) => {
  return deviceModel.create(deviceData);
};

export const getDeviceByUserId = async (userId) => {
  return deviceModel.find({ userId }, { _id: 0, __v: 0 });
};

export const getDeviceByDeviceId = async (deviceId) => {
  return deviceModel.findOne({ deviceId });
};

export const updateDeviceDetail = async (deviceId, deviceData) => {
  return deviceModel.findOneAndUpdate({ deviceId }, deviceData, {
    returnOriginal: false,
  });
};
