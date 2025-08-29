import express from "express"
const router = express.Router();
import userRoutes from "./userRoutes";
import bookmarkRoutes from "./bookmarkRoutes";

// "/api/users"
router.use("/users", userRoutes);

// "/api/bookmarks"
router.use("/bookmarks", bookmarkRoutes);

export default router;