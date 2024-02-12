import { Router } from "express";
import {
  getDeviceData,
  registerDevice,
  updateDevice,
} from "../../controllers/deviceController";

const deviceRouter = new Router();

deviceRouter.get("/device/list", getDeviceData);
deviceRouter.post("/register", registerDevice);
deviceRouter.put("/register", updateDevice);

export default deviceRouter;
