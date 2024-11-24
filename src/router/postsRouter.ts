import { Router } from "express";
import PostsController from "../post/controller/PostsController.js";
import posts from "../post/data/posts.js";

const postsRouter = Router();

const postsController = new PostsController(posts);

postsRouter.get("/", postsController.getPosts);

postsRouter.post("/", postsController.createPost);

postsRouter.delete("/:id", postsController.deletePostWithId);

export default postsRouter;
