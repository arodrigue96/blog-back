import { type Request, type Response } from "express";
import Post from "../../Post/Post";
import PostController from "../PostController";

describe("Given the get method of the PostController class", () => {
  describe("When it receives a response", () => {
    const post1: Post = new Post(
      "asasassq",
      "Aniol",
      "ñdljsafldjsafldñsajldñsaj",
      {
        imageUrl: "bestblog.com",
        altImageText: "cara de aniol",
      },
    );

    const post2: Post = new Post("asakjljsassq", "Erik", "ñljsfldñsajldñsaj", {
      imageUrl: "bestblog2.com",
      altImageText: "cara de Erik",
    });

    const posts: Post[] = [post1, post2];

    const postController = new PostController(posts);
    const req = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the response's method with status 200", () => {
      const expectedStatusCode = 200;

      postController.get(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method json with the post1 and post2", () => {
      postController.get(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ posts });
    });
  });
});
