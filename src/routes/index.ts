import { Router } from "express";
import user from "../routes/user.routes";
import comment from "../routes/comment.routes";
import post from "../routes/post.routes";
import like from "../routes/like.routes";

const router = Router();

router.use("/user", user);
router.use("/post", post);
router.use("/comment", comment);
router.use("/likes", like);

export default router;
