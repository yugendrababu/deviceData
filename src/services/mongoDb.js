import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongod = undefined;
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

export const connectionCallback = async (err) => {
  if (err) {
    console.log(err);
  } else {

      console.log("Db connection successfully established");
  }

};

export const mongoDbConnect = async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  const mongooseOpts = {
    dbName:"deviceData",
      useNewUrlParser: true,
  };

  await mongoose.connect(uri, mongooseOpts,connectionCallback);
};
