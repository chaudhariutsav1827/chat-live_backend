import bcrypt from "bcrypt";
import { NextFunction } from "express";

import { AppError } from "./error.helper";
export const generateHash = async (password: string, next: NextFunction) => {
  const saltRounds = 10;
  return bcrypt
    .hash(password, saltRounds)
    .catch((err) => next(new AppError(err.message, 500)));
};

export const compareHashes = async (password: string, next: NextFunction) => {
  const hash = await generateHash(password, next);
  return await bcrypt.compare(password, hash!);
};
