import mongoose, { ConnectOptions } from "mongoose";

export const connectToDatabase = async () => {
  const databaseConfig = {
    uri: process.env.DB_URI,
    options: {
      dbName: process.env.DB_NAME,
    } as ConnectOptions,
  };
  try {
    mongoose.connect(databaseConfig.uri ?? "", databaseConfig.options);
    mongoose.connection.once("open", () => {});
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
