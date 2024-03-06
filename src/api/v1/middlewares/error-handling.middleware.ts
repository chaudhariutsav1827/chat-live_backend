import { Request, Response, NextFunction } from "express";
import { APIResponse } from "@interfaces";
import { AppError } from "@helpers";

/**
 * Global error handling middleware.
 * Catches any unhandled errors and returns a formatted 500 error response.
 * Logs the error to the console for debugging.
 *
 * @param err - The unhandled error object
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  let statusCode = err.statusCode || 500;
  const response: APIResponse = {
    status: "error",
    error: err.message || "Internal Server Error",
  };

  res.status(statusCode).json(response);
};
