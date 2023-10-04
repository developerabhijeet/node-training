import { Schema, Types, model, models } from "mongoose";

const CommentSchema = new Schema({
  profileId: {
    type: Types.ObjectId,
  },
  postId: {
    type: Types.ObjectId,
  },
  message: {
    type: String,
  },
});

export default models.comments || model("comment", CommentSchema);
