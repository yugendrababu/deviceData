import {
  getDeviceByUserId,
  addDeviceDetail,
  getDeviceByDeviceId,
  updateDeviceDetail,
} from "../models/queries/deviceQueries";


const { v4: uuidv4 } = require("uuid");

export const getDeviceChannelData = async (userid) => {
  try {
    return await getDeviceByUserId(userid);
  } catch (error) {
    console.log(error);
  }
};

export const registerDeviceChannel = async (req) => {
  try {
    const deviceDataReq = {
      deviceId: req.body?.deviceId || uuidv4(),
      pushPref: req.body.pushPref,
      userId: req.body.userId,
      uaChannelId: req.body.uaChannelId,
      deviceType: req.body.deviceType,
      token: req.body.token,
      countryCode: req.query.locale === "en-GB" ? "GB" : "IE",
      createdOn: Date.now(),
    };
    return await addDeviceDetail(deviceDataReq);
  } catch (error) {
    console.log(error);
  }
};

export const updateDeviceChannel = async (req) => {
  try {
    const { deviceId } = req.body;
    const deviceDataReq = { updatedOn: Date.now(), ...req.body };
    return await updateDeviceDetail(deviceId, deviceDataReq);
  } catch (error) {
    console.log(error);
  }
};

export const getDeviceDataByDeviceId = async (deviceId) => {
  try {
    return await getDeviceByDeviceId(deviceId);
  } catch (error) {
    console.log(error);
  }
};
