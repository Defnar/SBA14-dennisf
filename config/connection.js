import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

 mongoose.connect(uri);

const db = mongoose.connection;


export default db;