import { type Response, type Request } from "express";
import handleEndpointNotFound from "./handleEndpointNotFound";
import ServerError from "../ServerError/ServerError";

describe("Given the handleEndpointNotFound middleware", () => {
  describe("When it receives next function", () => {
    test("Then it should call next function with a 'Endpoint not found' 404 error", () => {
      const statusCode = 404;
      const errorMessage = "Endpoint not found";
      const next = jest.fn();

      const expectedError = new ServerError(errorMessage, statusCode);

      handleEndpointNotFound({} as Request, {} as Response, next);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
