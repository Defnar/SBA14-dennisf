import express from "express"
import { authEditMiddleware, authUserMiddleware } from "../utils/auth";
import {createBookmark, getAllBookmarks, getBookmark, }from "../controllers/bookmarkControllers"

const router = express.Router();


router.use(authUserMiddleware)

//api/bookmarks....

//new bookmark
router.post("/new", createBookmark);


//get all bookmarks
router.get("/posts", getAllBookmarks);

//checks for bookmark permissions and attaches notes to req if allowed
router.use(authEditMiddleware)


//get one bookmark
router.get("/posts:id", getBookmark);


//update bookmark
router.put("/update", ...);

//delete bookmark
router.delete("/delete:id", ...);

export default router;

