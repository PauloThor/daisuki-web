import { UserInfo } from "./user";

export interface Comment {
  id: number;
  user: UserInfo;
  content: string;
  createdAt: string;
  updatedAt: string;
}
