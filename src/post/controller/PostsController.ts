import { type PostsControllerStructure } from "./types.js";
import { type Response, type Request } from "express";
import ServerError from "../../server/errors/ServerError/ServerError.js";
import Posts from "../Post/Post.js";

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

  deletePostWithId = (req: Request, res: Response): void => {
    const index = -1;
    const deletedPostsNumber = 1;
    const statusCode = 200;
    const message = "Post deleted";

    const { id } = req.params;

    const postPosition = this.posts.findIndex((post) => post.id === Number(id));

    if (postPosition === index) {
      throw new ServerError("Post not found", 404);
    }

    this.posts.splice(postPosition, deletedPostsNumber);

    res.status(statusCode);
    res.json({ message });
  };
}

export default PostsController;
