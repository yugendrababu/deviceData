const GET_DEVICE_LIST_DATA_BY_USER_ID = (userId) =>
  `Failed to get device list data with userId ${userId}`;
const GET_DEVICE_DATA_BY_DEVICE_ID = (deviceId) =>
  `Failed to get device data with deviceID ${deviceId}`;
const ADD_DEVICE_DETAIL = "Failed to register device";
const UPDATE_DEVICE_DETAIL = "Failed to update device details";
const TIME_OUT_ERROR = "Time out Error while executing the DB query";

export default {
  GET_DEVICE_LIST_DATA_BY_USER_ID,
  GET_DEVICE_DATA_BY_DEVICE_ID,
  ADD_DEVICE_DETAIL,
  UPDATE_DEVICE_DETAIL,
  TIME_OUT_ERROR,
};
