"use strict";

import { Router } from "express";
import { createComment, getComment } from "../controller/comment.controller";
const router = Router();

// router.patch("/", PostController.updatePost);
router.post("/", createComment);
router.get("/:id?", getComment);

export default router;
