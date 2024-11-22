import { type Request, type Response } from "express";
import Posts from "../../Post/Post";
import PostsController from "../PostsController";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the getPosts method of the PostsController class", () => {
  describe("When it receives a response", () => {
    const post1: Posts = new Posts(
      "asasassq",
      "Aniol",
      "ñdljsafldjsafldñsajldñsaj",
      {
        imageUrl: "bestblog.com",
        altImageText: "cara de aniol",
      },
    );

    const post2: Posts = new Posts(
      "asakjljsassq",
      "Erik",
      "ñljsfldñsajldñsaj",
      {
        imageUrl: "bestblog2.com",
        altImageText: "cara de Erik",
      },
    );

    const posts: Posts[] = [post1, post2];

    const postController = new PostsController(posts);
    const req = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the response's method with status 200", () => {
      const expectedStatusCode = 200;

      postController.getPosts(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method json with the post1 and post2", () => {
      postController.getPosts(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ posts });
    });
  });
});
