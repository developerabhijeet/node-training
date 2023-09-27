import express from 'express';
import { Router } from 'express';
import { register } from '../controllers/userController';
import { signin } from '../controllers/userController';
const userRouter = Router()

userRouter.post("/signup",register)


userRouter.post("/signin",signin)

export {userRouter}