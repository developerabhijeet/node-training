import { Request, Response } from "express";

import commentModel from "../model/comment.model";
import postModel from "../model/post.model";
import voteModel from "../model/vote.model";

async function createComment(req: Request, res: Response) {
  const { mbti, enneagram, zodiac, profileId, postId, message } = req.body;
  const updatedComments = new commentModel({ profileId, postId, message });
  let vote = new voteModel({
    profileId,
    postId,
    mbti,
    enneagram,
    zodiac,
  });
  let post = await postModel.findById({ _id: postId });
  postModel
    .findByIdAndUpdate(
      { _id: postId },
      {
        comments: [...post.comments, updatedComments._id],
        votes: [...post.votes, vote._id],
      }
    )
    .then(() => res.json({ msg: "comment added successfully....!" }))
    .catch((error: any) => res.json({ error: error }));
  // updatedComments
  //   .save()
  //   .then(() => res.json({ msg: "data added successfully....!" }))
  //   .catch((error) => res.json({ error: error }));
}
function getComment(req: Request, res: Response) {
  const commentID = req.params.id;
  if (commentID) {
    commentModel
      .findById(commentID)
      .then((data: any) => res.json(data))
      .catch((error: any) => res.json({ error: error }));
  } else {
    commentModel
      .find({})
      .then((data: any) => res.json(data))
      .catch((error: any) => res.json({ error: error }));
  }
}
export { createComment, getComment };
