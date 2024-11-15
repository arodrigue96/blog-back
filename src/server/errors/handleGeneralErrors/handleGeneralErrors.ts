import { type NextFunction, type Response, type Request } from "express";
import { type ServerError } from "../types";

const handleGeneralErrors = (
  error: ServerError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const serverError = 500;
  const statusCode = error.statusCode ?? serverError;
  const errorMessage =
    statusCode === serverError ? "Server Error" : error.message;

  res.status(statusCode).json({ message: errorMessage });
};

export default handleGeneralErrors;
