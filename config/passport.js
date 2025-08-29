import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { User } from "../models/User";


passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            callbackURL: process.env.GITHUB_CLIENT_URL,
            clientSecret: process.env.GITHUB_SECRET
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const existingUser = await User.findOne({githubId: profile.id});

                //if exisiting user, returns the attached profile
                if (existingUser) return done(null, existingUser);

                //creates new user if no existing user
                const newUser = new User({
                    githubId: profile.id,
                    username: profile.username,
                    //self reminder, emails are sent as an array from github.  emails[0] is important
                    email: profile.emails[0].value
                })

                await newUser.save();

                //sends new user to be used in validation
                done(null, newUser);
            }
            catch (err) {
                done(err);
            }
        }
    )
)


//session management
passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
})