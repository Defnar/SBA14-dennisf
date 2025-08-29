import express from "express"

const router = express.Router();

// "api/users/auth"
router.get("/auth", authRoutes)


export default router;