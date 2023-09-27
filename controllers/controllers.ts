import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import { UserInterface } from '../modal/userModel';


let users: UserInterface[] = [];

export const getUsers = (req: Request, res: Response): void => {
  res.send(users);
};

export const createUsers = (req: Request, res: Response): void => {
  const user: UserInterface = req.body;
  user.id = uuidv4();
  users.push(user);
  res.send("User Addeds successfully");
};

export const getUser = (req: Request, res: Response): void => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    res.json(user);
  }
};

export const updateUser = (req: Request, res: Response): void => {
  const userId = req.params.id;
  const { name, lname, position, company } = req.body;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    if (name) {
      user.name = name;
    }

    if (lname) {
      user.lname = lname;
    }

    if (position) {
      user.position = position;
    }

    if (company) {
      user.company = company;
    }

    res.json(user);
  }
};

export const deleteUser = (req: Request, res: Response): void => {
  const userId = req.params.id;
  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    res.status(404).json({ error: 'User not found' });
  } else {
    users.splice(index, 1);
    res.send("User deleted successfully");
  }
};
