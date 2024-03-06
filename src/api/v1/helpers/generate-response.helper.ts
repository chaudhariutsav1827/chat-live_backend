import { APIResponse } from "../interfaces/response.interface";

export const generateResponse = (data?: any): APIResponse => {
  return {
    status: "success",
    data,
  };
};
