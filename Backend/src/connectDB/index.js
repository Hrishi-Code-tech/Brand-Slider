import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\nMongoDB Connected Successfully! || DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED: ", error);
    process.exit(1);
  }
};

export default connectDB;
