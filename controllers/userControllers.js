import { User } from "../models/User";
import { signToken } from "../utils/auth";

export const registerUser = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ message: "Body cannot be empty" });

    if (User.find({ email: req.user.email }))
      return res.status(403).json({ message: "email already exists" });

    await User.create(req.body);
  } catch (err) {
    console.log(err);
    return res.status(403).json({ message: err.message });
  }
};

export const logUserIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.find({ email: email });

    if (!user || !user.isCorrectPassword(password)) {
      return res.status(403).json({ message: "email and password do not match" });
    }

    const token = signToken(user);

    res.json({ token, user });
  } catch (err) {
    console.log("error: ", err.message);
    return res
      .status(500)
      .json({ error: "An internal server error has occurred" });
  }
};
