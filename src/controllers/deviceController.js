import {
  getDeviceChannelData,
  registerDeviceChannel,
  updateDeviceChannel,
  getDeviceDataByDeviceId,
} from "../services/deviceService";
import createDeviceResponse from "../util/createDeviceResponse";

export const getDeviceData = async (req, res, next) => {
  try {
    const {
      query: { userid },
    } = req;

    const response = {
      registeredDevices: await getDeviceChannelData(userid),
    };
    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
};

export const registerDevice = async (_req, res, next) => {
  try {
    let result;
    if (_req.body?.deviceId) {
      result = await getDeviceDataByDeviceId(_req.body.deviceId);
      if (result) {
        return res.status(201).json(createDeviceResponse(result));
      }
    }
    result = await registerDeviceChannel(_req);

    return res.status(201).json(createDeviceResponse(result));
  } catch (error) {
    return next(error);
  }
};

export const updateDevice = async (_req, res, next) => {
  try {
    const result = await updateDeviceChannel(_req);
    return res.status(200).json(createDeviceResponse(result));
  } catch (error) {
    return next(error);
  }
};
