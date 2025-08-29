import express from "express"
import { authEditMiddleware, authUserMiddleware } from "../utils/auth";
import {createBookmark, }from "../controllers/bookmarkControllers"

const router = express.Router();


router.use(authUserMiddleware)

//api/bookmarks....

//new bookmark
router.post("/new", createBookmark);

//checks for bookmark permissions and attaches notes to req if allowed
router.use(authEditMiddleware)


//get one bookmark
router.get("/posts:id", ...);

//get all bookmarks
router.get("/posts", ...);

//update bookmark
router.put("/update", ...);

//delete bookmark
router.delete("/delete:id", ...);

export default router;

