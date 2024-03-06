import { ID_REGEX } from "@config";
import Joi from "joi";

export const validateId = (id: string) => {
  return Joi.string().regex(ID_REGEX).validate(id);
};
