import { Schema, model, Document } from "mongoose";

import { PASSWORD_REGEX } from "@config";
import { IUser } from "@interfaces";

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = model<IUser>("User", UserSchema);
