import { type Response, type Request } from "express";
import Posts from "../../Post/Post";
import PostsController from "../PostsController";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the method createPost of PostsController class", () => {
  describe("When it receives a request", () => {
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

    const postController = new PostsController([post1, post2]);

    const req: Partial<Request> = {
      body: {},
    };

    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call status method with status code 201", () => {
      const expectedStatusCode = 201;
      postController.createPost(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method", () => {
      postController.createPost(req as Request, res as Response);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
