import mongoose from "mongoose";

export async function connect() {
  console.log("Connecting to MongoDB server");
  await mongoose.connect(process.env.mongoUri || "", { dbName: "NodeTraning" });
}
