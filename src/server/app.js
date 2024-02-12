import express from "express";
import { StatusCodes } from "http-status-codes";
import correlator from "../middleware/correlator";
import errorMiddleware from "../middleware/errorMiddleware";
import deviceRouter from "../routes/v1/deviceRouter";
import { mongoDbConnect } from "../services/mongoDb";



const app = express();

app.use(express.json(), correlator);

app.use("/ping", (_req, res) => {
  res.sendStatus(StatusCodes.OK);
});

app.use("/health", (_req, res) => {
  res.status(StatusCodes.OK).json({
    health: {
      app: "ok",
    },
  });
});

app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/", deviceRouter);

app.use(errorMiddleware);

mongoDbConnect();

export default app;
