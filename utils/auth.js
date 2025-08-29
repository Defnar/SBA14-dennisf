import jwt from "jsonwebtoken";
import {Bookmark} from "../models/Bookmark.js";

const secret = process.env.SECRET;
const expiration = "15m";

//general middleware to check if user is authenticated to work with bookmarks
export const authUserMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) res.status(401).json({ message: "You must be logged in" });

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

export const signToken = (user) => {
    const payload = {username: user.username, email: user.email, _id: user._id};
    console.log(payload);
    
    return jwt.sign({data: payload}, secret, {expiresIn: expiration})
}


//checks if the user is allowed to edit the bookmark or not
export const authEditMiddleware = async (req, res, next) => {
    try {
    
    const bookmark = await Bookmark.findById(req.params.id);

    if (!bookmark) return res.status(403).json({message: "no bookmark found"})

    if (bookmark.userId.toString() !== req.user._id.toString()) return res.status(401).json({message: "unauthorized"})

    req.bookmark = bookmark;

    next();
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({message: err.message})
    }

}