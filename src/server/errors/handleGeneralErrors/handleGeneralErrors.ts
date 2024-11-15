import { type NextFunction, type Response, type Request } from "express";
import type ServerError from "../ServerError/ServerError";
import chalk from "chalk";

const handleGeneralErrors = (
  error: ServerError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(chalk.red(error.message));
  console.log(chalk.red(error.stack));

  const serverError = 500;
  const statusCode = error.statusCode ?? serverError;
  const errorMessage =
    statusCode === serverError ? "Server Error" : error.message;

  res.status(statusCode).json({ message: errorMessage });
};

export default handleGeneralErrors;
