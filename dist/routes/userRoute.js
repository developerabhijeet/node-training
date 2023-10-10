"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const userRouter = (0, express_1.Router)();
userRouter.post("/create", userController_1.createItem);
userRouter.delete("/delete/:id", userController_1.deleteItem);
exports.default = userRouter;
//# sourceMappingURL=userRoute.js.map