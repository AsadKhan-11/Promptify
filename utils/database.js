import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
  if (isConnected) {
    console.log("Database is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log("error:", error);
  }
};
