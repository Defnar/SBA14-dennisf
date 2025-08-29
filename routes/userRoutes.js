import express from "express"
import { logUserIn, registerUser } from "../controllers/userControllers.js";
import authRoutes from "./authRoutes.js"

const router = express.Router();


//api/users...

// "/auth"
router.use("/auth", authRoutes)

// "/login"
router.post("/login", logUserIn)

// "/register"
router.post("/register", registerUser);


export default router;