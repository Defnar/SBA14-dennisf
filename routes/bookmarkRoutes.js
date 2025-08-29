import express from "express";
import { authEditMiddleware, authUserMiddleware } from "../utils/auth.js";
import {
  createBookmark,
  deleteBookmark,
  editBookmark,
  getAllBookmarks,
  getBookmark,
} from "../controllers/bookmarkControllers.js";

const router = express.Router();

router.use(authUserMiddleware);

//api/bookmarks....

router.post("/", createBookmark);
router.get("/", getAllBookmarks);

//checks for bookmark permissions and attaches bookmark to req if allowed
router.use("/:id", authEditMiddleware);

//operations on solo bookmark, such as get one, edit one, delete one
router.get("/:id", getBookmark);
router.put("/:id", editBookmark);
router.delete("/:id", deleteBookmark);

export default router;
