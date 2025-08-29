import express from "express"
import { logUserIn, registerUser } from "../controllers/userControllers";
import authRoutes from "./authRoutes"

const router = express.Router();


//api/users...

// "/auth"
router.use("/auth", authRoutes)

// "/login"
router.post("/login", logUserIn)

// "/register"
router.post("/register", registerUser);


export default router;