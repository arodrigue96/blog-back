import { Router } from "express";
import PostController from "../post/controller/PostController.js";
import posts from "../post/data/posts.js";

const postRouter = Router();

const postController = new PostController(posts);

postRouter.get("/", postController.get);

postRouter.post("/", postController.post);

export default postRouter;
