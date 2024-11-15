import { type Response, type Request } from "express";
import handleEndpointNotFound from "./handleEndpointNotFound";

describe("Given the handleEndpointNotFound middleware", () => {
  describe("When it receives next function", () => {
    test("Then it should call next function with a 'Endpoint not found' 404 error", () => {
      const next = jest.fn();
      const expectedError = {
        statusCode: 404,
        message: "Endpoint not found",
      };

      handleEndpointNotFound({} as Request, {} as Response, next);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
