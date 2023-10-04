import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  mbti: {
    type: String,
  },
  enneagram: {
    type: String,
  },
  variant: {
    type: String,
  },
  tritype: {
    type: String,
  },
  socionics: {
    type: String,
  },
  sloan: {
    type: String,
  },
  psyche: {
    type: String,
  },
  image: {
    type: String,
    default:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
  },
});

export default models.users || model("user", UserSchema);
