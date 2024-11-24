import { type Request, type Response } from "express";

export interface PostsControllerStructure {
  getPosts: (_req: Request, res: Response) => void;
  createPost: (req: Request, res: Response) => void;
  deletePostWithId: (req: Request, res: Response) => void;
}
