"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const authRouter = (0, express_1.Router)();
authRouter.post('/login', authController_1.login);
exports.default = authRouter;
//# sourceMappingURL=authRoutes.js.map