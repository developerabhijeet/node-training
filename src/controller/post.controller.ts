import { Request, Response } from "express";
import postModel from "../model/post.model";

function CreatePost(req: Request, res: Response) {
  const post = new postModel(req.body);
  post
    .save()
    .then(() => res.json({ msg: "data added successfully....!" }))
    .catch((error: any) => res.json({ error: error }));
}

function GetPost(req: Request, res: Response) {
  const postID = req.params.id;
  const sort = req.query.sort;
  if (postID) {
    postModel
      .findById(postID)
      .then((data: any) => res.json(data))
      .catch((error: any) => res.json({ error: error }));
  } else {
    const sortQuery = sort === "Best" ? { likesCount: -1 } : { _id: 1 };
    postModel
      .find({})
      // .sort(sortQuery)
      .then((data: any) => res.json(data))
      .catch((error: any) => res.json({ error: error }));
  }
}

export { CreatePost, GetPost };
