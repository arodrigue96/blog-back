import request from "supertest";
import app from "../../server";
import type Post from "../../post/Post/Post";

describe("Given the GET /posts endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should response with the status 200 and a list of posts with the following titles: 'Exploring the Future of AI' and 'Innovation in Renewable Energy'", async () => {
      const expectedStatusCode = 200;
      const expectedTitlePost1 = "Exploring the Future of AI";
      const expectedTitlePost2 = "Innovation in Renewable Energy";

      const response = await request(app)
        .get("/posts")
        .expect(expectedStatusCode);

      const responseBody = response.body as { posts: Post[] };

      expect(responseBody.posts).toMatchObject<Partial<Post>[]>([
        {
          title: expectedTitlePost1,
        },
        {
          title: expectedTitlePost2,
        },
      ]);
    });
  });
});
