import { Schema, model, models } from "mongoose";

const VoteSchema = new Schema({
  profileId: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  mbti: {
    type: String,
  },
  enneagram: {
    type: String,
  },
  zodiac: {
    type: String,
  },
});

export default models.votes || model("vote", VoteSchema);
