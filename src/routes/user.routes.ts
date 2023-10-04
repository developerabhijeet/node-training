"use strict";

import { Router } from "express";
import { CreateUser, GetUser } from "../controller/user.controller";

const router = Router();

router.post("/", CreateUser);
router.get("/", GetUser);

export default router;
