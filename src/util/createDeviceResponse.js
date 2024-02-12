const createDeviceResponse = (deviceData) => {
  return {
    deviceId: deviceData?.deviceId,
    userId: deviceData?.userId,
    deviceType: deviceData?.deviceType,
  };
};

export default createDeviceResponse;
