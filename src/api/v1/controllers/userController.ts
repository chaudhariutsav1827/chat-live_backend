import { NextFunction, Request, Response } from "express";

import { UserModel } from "@models";
import { validateUser, validateId, validateExistingUser } from "@validations";
import {
  AppError,
  compareHashes,
  generateResponse,
  generateHash,
} from "@helpers";

/**
 * get users list
 */
const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await UserModel.find();
    const usersWithoutPasswords = users.map((user) => {
      const { password, ...userWithoutPassword } = user.toObject();
      return userWithoutPassword;
    });
    res.status(200).json(generateResponse(usersWithoutPasswords));
  } catch (error: any) {
    return next(new AppError(error?.message, 400));
  }
};

/**
 * Request create user
 */
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  const { error } = validateUser(req.body);
  if (error) {
    return next(new AppError(error.details[0].message, 400));
  }
  try {
    const existingUser = await UserModel.findOne({ email: newUser.email });
    if (existingUser) return next(new AppError("User already exists", 400));

    //hashing password
    newUser.password = await generateHash(newUser.password, next);

    const user = await UserModel.create(newUser);
    const { password, ...userWithoutPassword } = user.toObject();
    res.status(200).json(generateResponse(userWithoutPassword));
  } catch (error: any) {
    return next(new AppError(error?.message, 400));
  }
};

/**
 * get user by id
 */
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.id;
  const { error } = validateId(userId);
  if (error) return next(new AppError(error.details[0].message, 400));

  try {
    const user = await UserModel.findById({ _id: userId });
    if (user) {
      const { password, ...userWithoutPassword } = user.toObject();
      res.status(200).json(generateResponse(userWithoutPassword));
    }
    res.status(200).json(new AppError("No user found", 404));
  } catch (error: any) {
    return next(new AppError(error?.message, 400));
  }
};

/**
 * update user by id
 */
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.id;
  const updates = req.body;

  const idError = validateId(userId);
  if (idError.error)
    return next(new AppError(idError.error.details[0].message, 400));

  const { error } = validateExistingUser(updates);
  if (error) return next(new AppError(error.details[0].message, 400));

  try {
    const user = await UserModel.findByIdAndUpdate({ userId }, updates, {
      new: true,
    });
    if (user) {
      const { password, ...userWithoutPassword } = user.toObject();
      res.status(200).json(generateResponse(userWithoutPassword));
    }
    res.status(200).json(new AppError("No user found", 404));
  } catch (error: any) {
    return next(new AppError(error?.message, 400));
  }
};

export { getUsers, createUser, getUser, updateUser };
