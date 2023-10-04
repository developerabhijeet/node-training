"use strict";

import { Router } from "express";
import { CreatePost, GetPost } from "../controller/post.controller";
const router = Router();

// router.patch("/", PostController.updatePost);
router.post("/", CreatePost);
router.get("/:id?", GetPost);

export default router;
