import { type Request, type Response } from "express";
import Post from "../../Post/Post";
import PostsController from "../PostsController";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the deletePostWithId method of PostController class", () => {
  describe("When it receives a response", () => {
    const aniolPost = new Post("los tesitos", "Aniol", "tesstestst", {
      imageUrl: "aniol.webp",
      altImageText: "cara de Aniol",
    });

    const erikPost = new Post("asakjljsassq", "Erik", "ñljsfldñsajldñsaj", {
      imageUrl: "bestblog2.com",
      altImageText: "cara de Erik",
    });

    const posts: Post[] = [aniolPost, erikPost];

    const req: Partial<Request> = {
      params: {
        id: "1",
      },
    };

    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the response's method with status 200", () => {
      const postsController = new PostsController(posts);

      postsController.deletePostWithId(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
