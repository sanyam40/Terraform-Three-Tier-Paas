import mongoose, { type ConnectOptions } from "mongoose";
import dotenv from "dotenv";
import logger from "./utils/logger";

dotenv.config();

const url: string | undefined = process.env.MONGO_URL;

if (!url) {
  throw new Error("The MONGO_URL environment variable is not set or is empty.");
}

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(url, {} as ConnectOptions);
    logger.info("Connection successful to MongoDB");
  } catch (error) {
    logger.error("Error connecting to MongoDB", error);
    throw error;
  }
};

export const closeDB = async (): Promise<void> => {
  try {
    await mongoose.connection.close();
    logger.info("Connection closed to MongoDB");
  } catch (error) {
    logger.error("Error closing MongoDB connection", error);
    throw error;
  }
};
