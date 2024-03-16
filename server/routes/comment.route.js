import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createComment,
  getPostComments,
  getcomments,
  likeComment,
  editComment,
  deleteComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/getPostComments/:postId", getPostComments);
router.get("/getcomments", verifyToken, getcomments);
router.post("/create", verifyToken, createComment);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);
router.delete("/deleteComment/:commentId", verifyToken, deleteComment);

export default router;