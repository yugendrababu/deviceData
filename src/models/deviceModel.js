import mongoose from "mongoose";

const { Schema } = mongoose;

const DeviceDataSchema = new Schema({
  deviceId: {
    type: String,
    unique: true,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  deviceType: {
    type: String,
    required: true,
  },
});

const deviceModel =
  mongoose.models.collection ||
  mongoose.model("deviceData", DeviceDataSchema);

export default deviceModel;
