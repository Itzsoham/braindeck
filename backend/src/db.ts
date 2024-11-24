import mongoose, { model, Schema } from "mongoose";
import { DB_URL } from "./config";

mongoose.connect(DB_URL);

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

const ContentSchema = new mongoose.Schema({
  title: String,
  link: String,
  type: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const TagSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
});

const LinkSchema = new mongoose.Schema({
  Hash: { type: String, required: true },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});

export const UserModel = mongoose.model("User", UserSchema);
export const ContentModel = model("Content", ContentSchema);
export const TagModel = model("Tag", TagSchema);
export const LinkModel = model("Link", LinkSchema);
