import Posts from "../Post/Post.js";
import { type PostsControllerStructure } from "./types.js";
import { type Response, type Request } from "express";

class PostsController implements PostsControllerStructure {
  constructor(private readonly posts: Posts[]) {}

  getPosts = (_req: Request, res: Response): void => {
    const statusCode = 200;

    res.status(statusCode).json({ posts: this.posts });
  };

  createPost = (req: Request, res: Response): void => {
    const statusCode = 201;

    const { title, author, content, imageUrl, altImageText } =
      req.body as Posts;
    const newPost = new Posts(title, author, content, {
      imageUrl,
      altImageText,
    });

    this.posts.push(newPost);

    res.status(statusCode).json({ post: newPost });
  };
}

export default PostsController;
