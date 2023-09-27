import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import { UserModal } from "../modal/userModel";

let users: UserModal[] = [];

export const getUsers = (req: Request, res: Response): void => {
  res.send(users);
};

export const createUsers = (req: Request, res: Response): void => {
  const user: UserModal = req.body;
  user.id = uuidv4();
  users.push(user);
  res.send("Added Successfully");
};

export const getUser = (req: Request, res: Response): void => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: "User not found" });
  } else {
    res.json(user);
  }
};

export const updateUser = (req: Request, res: Response): void => {
  const userId = req.params.id;
  const { name, lname, phone } = req.body;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: "User not found" });
  } else {
    if (name) {
      user.name = name;
    }

    if (lname) {
      user.lname = lname;
    }

    if (phone) {
      user.phone = phone;
    }

    res.json(user);
  }
};

export const deleteUser = (req: Request, res: Response): void => {
  const userId = req.params.id;
  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    res.status(404).json({ error: "User not found" });
  } else {
    users.splice(index, 1);
    res.sendStatus(204);
  }
};
