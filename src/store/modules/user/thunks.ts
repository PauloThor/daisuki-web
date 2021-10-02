import { SetStateAction, Dispatch as ReactDispatch } from "react";
import { Dispatch } from "redux";
import { History } from "history";
import { daisukiApi } from "../../../services/api";
import { login } from "./actions";

interface UserLogin {
  email: string;
  password: string;
}

interface ILogin {
  type: string;
}

export const loginThunk =
  (
    data: UserLogin,
    setError: ReactDispatch<SetStateAction<boolean>>,
    history: History
  ) =>
  (dispatch: Dispatch<ILogin>) => {
    daisukiApi
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("@Daisuki:token", response.data.access);

        dispatch(login(response.data.access));
        history.push("/");
      })
      .catch((err) => setError(true));
  };
