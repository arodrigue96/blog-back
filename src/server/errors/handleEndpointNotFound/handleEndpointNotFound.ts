import { type Response, type Request, type NextFunction } from "express";

const handleEndpointNotFound = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error = { message: "Endpoint not found", statusCode: 404 };

  next(error);
};

export default handleEndpointNotFound;
