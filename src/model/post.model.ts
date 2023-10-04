import { Schema, Types, model, models } from "mongoose";

const PostSchema = new Schema({
  profileId: {
    type: Types.ObjectId,
    ref: "profile",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: Types.ObjectId,
      ref: "Comment",
    },
  ],
  votes: [
    {
      type: Types.ObjectId,
      ref: "Vote",
    },
  ],
  likesCount: {
    type: Number,
    default: 0,
  },
  likes: {
    type: [],
  },
});

export default models.posts || model("post", PostSchema);
