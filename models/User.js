import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  userName: {
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
  },
  email: {
    type: String,
    required: [true, "email required"],
    match: /.+\@.+\..+/,
    unique: true,
  },
  githubId: {
    type: String,
  },
  toJSON: {
    transform: function (doc, ret) {
      delete ret.githubId;
      delete ret.password;
      return ret;
    },
  },
});

UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    saltRounds = 11;
    this.password = bcrypt.hash(this.password, saltRounds);
  }
  next();
});

export const User = model("User", UserSchema);
