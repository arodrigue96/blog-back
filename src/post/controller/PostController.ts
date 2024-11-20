import Post from "../Post/Post.js";
import { type PostControllerStructure } from "./types";
import { type Response, type Request } from "express";

class PostController implements PostControllerStructure {
  constructor(private readonly posts: Post[]) {}

  get = (_req: Request, res: Response): void => {
    const statusCode = 200;

    res.status(statusCode).json(this.posts);
  };

  post = (req: Request, res: Response): void => {
    const statusCode = 201;

    const { title, author, content, imageUrl, altImageText } = req.body as Post;
    const newPost = new Post(title, author, content, {
      imageUrl,
      altImageText,
    });

    this.posts.push(newPost);

    res.status(statusCode).json(newPost);
  };
}

export default PostController;
