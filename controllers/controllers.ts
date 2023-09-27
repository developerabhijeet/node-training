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
  res.send("Successfully added user");
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
  const { name, email, phone_number } = req.body;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if (phone_number) {
      user.phone_number = phone_number;
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
    res.send("Deleted Successfully")
  }
};
