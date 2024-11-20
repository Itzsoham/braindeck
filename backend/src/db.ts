import mongoose, { model, Schema } from "mongoose";
import { DB_URL } from "./config";

mongoose.connect(DB_URL);

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const UserModel = mongoose.model("User", UserSchema);

const ContentSchema = new mongoose.Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const ContentModel = model("Content", ContentSchema);
