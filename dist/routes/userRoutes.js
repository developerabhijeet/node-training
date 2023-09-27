"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userController_2 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post("/signup", userController_1.register);
userRouter.post("/signin", userController_2.signin);
//# sourceMappingURL=userRoutes.js.map