import express from "express";
import { logUserIn, registerUser } from "../controllers/userControllers.js";
import authRoutes from "./authRoutes.js";

const router = express.Router();

//api/users...

//for Oauth login/register
router.use("/auth", authRoutes);

//local/non auth
router.post("/login", logUserIn);
router.post("/register", registerUser);

export default router;
