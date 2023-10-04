"use strict";

import { Router } from "express";
import { createLike, getLike } from "../controller/likes.controller";
const router = Router();

// router.patch("/", PostController.updatePost);
router.post("/", createLike);
router.get("/:id?", getLike);

export default router;
