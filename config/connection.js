import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

export const db = mongoose.connect(uri);