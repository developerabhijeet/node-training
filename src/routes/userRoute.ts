"use strict";
import { Router } from "express";
import { createItem, deleteItem } from "../controller/userController";

const userRouter = Router();

userRouter.post("/create", createItem);
userRouter.delete("/delete/:id",deleteItem)
export default userRouter;
