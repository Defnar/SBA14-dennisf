import express from "express"

const router = express.Router();

// "api/users/auth"
router.use("/auth", authRoutes)


export default router;