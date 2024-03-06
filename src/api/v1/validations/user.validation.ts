import Joi from "joi";
import { PASSWORD_REGEX } from "@config";
import { IUpdateUserRequest, IUser } from "@interfaces";

export const baseUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
});
export const validateUser = (user: IUser) => {
  return baseUserSchema
    .append({ password: Joi.string().pattern(PASSWORD_REGEX).required() })
    .validate(user);
};

export const validateExistingUser = (existingUser: IUpdateUserRequest) => {
  return baseUserSchema.validate(existingUser);
};
