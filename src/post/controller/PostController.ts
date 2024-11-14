import { type Request, type Response } from "express";
import { type PostControllerStructure } from "./types";
import Post from "../Post/Post";

class PostController implements PostControllerStructure {
  constructor(private readonly posts: Post[]) {}

  get = (_req: Request, res: Response): void => {
    res.status(200).json({ posts: this.posts });
  };
}

export default PostController;
