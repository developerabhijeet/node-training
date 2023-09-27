import { Router } from "express";
import multer from "multer";
import path from "path"
import { createUser, getUser, getAllUsers, deleteUser, updateUser } from "../controller/user.controller";
import { authUserMiddlerWare } from "../middleware/authMiddleWare";

const userRouter = Router();
const upload = multer({ dest: path.join(__dirname + "/uploadAssets") })

userRouter.get("/", authUserMiddlerWare, getAllUsers);
userRouter.get("/:id?", authUserMiddlerWare, getUser);
userRouter.post("/", authUserMiddlerWare, upload.single('photo'), createUser);
userRouter.delete("/:id?", authUserMiddlerWare, deleteUser);
userRouter.put("/:id?", authUserMiddlerWare, updateUser);

export { userRouter }