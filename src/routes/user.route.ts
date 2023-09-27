import { Router } from "express";
import multer from "multer";
import path from "path";
import {
  createUser,
  getUser,
  getSingleUser,
  deleteUser,
  updateUser,
} from "../controller/user.controller";
import { authUserMiddlerWare } from "../middlewares/auth";

const userRouter = Router();
const upload = multer({ dest: path.join(__dirname + "/uploadAssets") });

userRouter.get("/", authUserMiddlerWare, getUser);
userRouter.get("/:id?", authUserMiddlerWare, getSingleUser);
userRouter.post("/", authUserMiddlerWare, upload.single("photo"), createUser);
userRouter.delete("/:id?", authUserMiddlerWare, deleteUser);
userRouter.put("/:id?", authUserMiddlerWare, updateUser);

export { userRouter };
