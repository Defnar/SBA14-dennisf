import express from "express";
import passport from "passport";
import { signToken } from "../utils/auth";

const router = express.Router();

// "/api/users/auth/github"
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

// callback function "/api/users/auth/github/callback"
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/api/users/login",
    session: false,
  }),
  (req, res) => {
    const user = req.user;
    const token = signToken(user);

    res.json({ token, user });
  }
);

export default router;
