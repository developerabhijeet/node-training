import { Request, Response } from "express";
import userModel from "../model/user.model";

const users = {
  name: "A Martinez",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  mbti: "ISFJ",
  enneagram: "9w3",
  variant: "sp/so",
  tritype: 725,
  socionics: "SEE",
  sloan: "RCOEN",
  psyche: "FEVL",
  image:
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
};

function CreateUser(req: Request, res: Response) {
  const user = new userModel(req.body);
  user
    .save()
    .then(() => res.json({ msg: "data added successfully....!" }))
    .catch((error: any) => res.json({ error: error }));
}

function GetUser(req: Request, res: Response) {
  console.log("get called");
  userModel
    .find({})
    .then((data: any) => res.json(data))
    .catch((error: any) => res.json({ error: error }));
}

async function initSeed() {
  let user = await userModel.find({});
  if (!user.length) {
    const user = new userModel(users);
    user
      .save()
      .then(() => console.log("data added successfully....!"))
      .catch((error: any) => console.log(error));
  } else {
    console.log("User already added");
  }
}

export { CreateUser, GetUser, initSeed };
