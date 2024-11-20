import { type Response, type Request } from "express";
import Post from "../../Post/Post";
import PostController from "../PostController";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the method get of PostController class", () => {
  describe("When it receives a request", () => {
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

    const postController = new PostController([post1, post2]);

    const req: Partial<Request> = {
      body: {},
    };

    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call status method with status code 201", () => {
      const expectedStatusCode = 201;
      postController.post(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method", () => {
      postController.post(req as Request, res as Response);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
