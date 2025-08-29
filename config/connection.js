import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

const db = mongoose.connect(uri);

export default db;