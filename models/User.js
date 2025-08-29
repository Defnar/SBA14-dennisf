import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username required"],
      min: 6,
    },
    displayName: {
      type: String,
      min: 6,
    },
    password: {
      type: String,
      min: 8,
      required: function () {
        return !this.githubId;
      },
    },
    email: {
      type: String,
      required: [true, "email required"],
      match: /.+\@.+\..+/,
      unique: true,
    },
    githubId: {
      type: String,
      required: function () {
        return !this.password;
      },
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.githubId;
        delete ret.password;
        return ret;
      },
    },
  }
);

UserSchema.pre("save", async function (next) {
  if (this.password && (this.isNew || this.isModified("password"))) {
    const saltRounds = 11;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

UserSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = model("User", UserSchema);
