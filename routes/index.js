import express from "express"
const router = express.Router();

// "/api/users"
router.use("/users", userRoutes);

// "/api/bookmarks"
router.use("/bookmarks", bookmarkRoutes);

export default router;