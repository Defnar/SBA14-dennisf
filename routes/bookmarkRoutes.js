import express from "express"
import { authEditMiddleware, authUserMiddleware } from "../utils/auth.js";
import {createBookmark, deleteBookmark, editBookmark, getAllBookmarks, getBookmark, }from "../controllers/bookmarkControllers.js"

const router = express.Router();


router.use(authUserMiddleware)

//api/bookmarks....

//new bookmark
router.post("/", createBookmark);


//get all bookmarks
router.get("/", getAllBookmarks);

//checks for bookmark permissions and attaches notes to req if allowed
router.use(authEditMiddleware)


//get one bookmark
router.get("/:id", getBookmark);


//update bookmark
router.put("/:id", editBookmark);

//delete bookmark
router.delete(":id", deleteBookmark);

export default router;

