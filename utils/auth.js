import jwt from "jsonwebtoken";
import { User } from "../models/User";

const secret = process.env.SECRET;
const expiration = "15m";

export const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) retres.status(401).json({ message: "You must be logged in" });

  token = token.split(" ").pop().trim();

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("invalid token");
    return res.status(401).json({ message: "Invalid token" });
  }

  next();
};

export const signToken = (username, email, _id) => {
    const payload = {username, email, _id};
    
    return jwt.sign({data: payload}, secret, {expiresIn: expiration})
}