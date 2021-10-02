import { LOGIN_USER } from "./actionsTypes";

export const login = (token: string) => ({ type: LOGIN_USER, token });
