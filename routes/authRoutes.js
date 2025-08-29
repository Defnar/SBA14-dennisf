import express from "express";
import passport from "passport";

const router = express.Router();

// "/api/users/auth/github"
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);


// callback function "/api/users/auth/github/callback"
router.get("/github/callback",
    passport.authenticate("github", {
        failureRedirect: "/api/users/login",
        session: false
    }),
    (req, res) => {
        const token = //still need to create token auth
        
    }
)

export default router;