"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const userRouter = (0, express_1.Router)();
userRouter.get("/get", userController_1.getUsers);
userRouter.get("/get/:id", userController_1.getUserById);
userRouter.post("/create", userController_1.createUser);
userRouter.put("update/:id", userController_1.updateUser);
userRouter.delete("delete/:id", userController_1.deletUser);
exports.default = userRouter;
//# sourceMappingURL=userRoute.js.map