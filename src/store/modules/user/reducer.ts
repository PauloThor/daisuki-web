import { AnyAction } from "redux";
import { LOGIN_USER } from "./actionsTypes";

const token = localStorage.getItem("@Daisuki:token") || "";

const defaultState = {
  token,
  user: {},
};

const userReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_USER:
      const { token } = action;

      return { ...state, token };

    default:
      return state;
  }
};

export default userReducer;
