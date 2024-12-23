import { type Response, type Request } from "express";
import handleGeneralErrors from "./handleGeneralErrors";
import ServerError from "../ServerError/ServerError";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given handleGeneralErrors middleware", () => {
  const request = {};
  const response: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next = () => {
    throw new Error("not implemented");
  };

  describe("When it receives a server error with a status code 404 and a message 'Endpoint not found'", () => {
    const error = new ServerError("Endpoint not found", 404);

    test("Then it should call status method of the response with status code 404", () => {
      const expectedStatusCode = 404;

      handleGeneralErrors(
        error,
        request as Request,
        response as Response,
        next,
      );

      expect(response.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method with message 'Endpoint not found'", () => {
      const expectedErrorMessage = { message: "Endpoint not found" };

      handleGeneralErrors(
        error,
        request as Request,
        response as Response,
        next,
      );

      expect(response.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });

  describe("When it receives a error with message 'Type Error'", () => {
    const error = new ServerError("Type Error");

    test("Then it should call status method with status code 500", () => {
      const expectedStatusCode = 500;

      handleGeneralErrors(
        error,
        request as Request,
        response as Response,
        next,
      );

      expect(response.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method with message 'Server Error'", () => {
      const expectedErrorMessage = { message: "Server Error" };

      handleGeneralErrors(
        error,
        request as Request,
        response as Response,
        next,
      );

      expect(response.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
