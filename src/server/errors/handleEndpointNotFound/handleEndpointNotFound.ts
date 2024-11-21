import { type Response, type Request, type NextFunction } from "express";
import ServerError from "../ServerError/ServerError.js";

const handleEndpointNotFound = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error = new ServerError("Endpoint not found", 404);

  next(error);
};

export default handleEndpointNotFound;
