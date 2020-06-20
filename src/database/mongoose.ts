import * as mongoose from "mongoose";
import { resolve } from "path";
import { rejects } from "assert";

const DB_URI =
  "mongodb+srv://infosistemas:Brasil@123@cluster0-84qfi.mongodb.net/<infosistemas>?retryWrites=true&w=majority";

export function connect() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => {
        resolve();
      })
      .catch((err: Error) => {
        return err;
      });
  });
}

export function close(){
  return mongoose.disconnect();
}

