import express from "express"
const router = express.Router();

// "/api/users"
router.get("/users", userRoutes);

// "/api/bookmarks"
router.get("/bookmarks", bookmarkRoutes);

export default router;