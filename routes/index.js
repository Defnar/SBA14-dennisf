import express from "express"
const router = express.Router();
import userRoutes from "./userRoutes.js";
import bookmarkRoutes from "./bookmarkRoutes.js";

// "/api/users"
router.use("/users", userRoutes);

// "/api/bookmarks"
router.use("/bookmarks", bookmarkRoutes);

export default router;