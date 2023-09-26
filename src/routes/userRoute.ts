"use strict";
import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deletUser,
} from "../controller/userController";

const userRouter = Router();

userRouter.get("/get", getUsers);
userRouter.get("/get/:id", getUserById);
userRouter.post("/create", createUser);
userRouter.put("update/:id", updateUser);
userRouter.delete("delete/:id", deletUser);

export default userRouter;
