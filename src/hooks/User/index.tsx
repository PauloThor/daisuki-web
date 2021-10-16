import { createContext, useContext, ReactNode, useState } from "react";
import { History } from "history";
import { daisukiApi } from "../../services/api";

interface LoginData {
  email: string;
  password: string;
}

interface UserProps {
  email?: string;
  avatarUrl?: string;
  isAuth?: boolean;
  username?: string;
}

interface UserData {
  token: string;
  login: (data: LoginData, history: History) => void;
  logout: () => void;
  user: UserProps;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserData>({} as UserData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("@Daisuki:token") ?? ""
  );

  const [user, setUser] = useState({});

  const login = (data: LoginData, history: History) => {
    daisukiApi
      .post("/users/login", data)
      .then((res) => {
        localStorage.setItem("@Daisuki:token", JSON.stringify(res.data.access));
        setUser(res.data.user);
        setToken(res.data.access);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("@Daisuki:token");
    setToken("");
  };

  return (
    <UserContext.Provider value={{ token, login, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
