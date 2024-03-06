import { Document } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUpdateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
}
