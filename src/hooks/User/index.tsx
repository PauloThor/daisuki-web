import { createContext, useContext, ReactNode, useState } from "react";
import { History } from "history";
import { daisukiApi } from "../../services/api";
import { toast } from "react-hot-toast";

interface LoginData {
  email: string;
  password: string;
  remindMe: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  username: string;
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
  register: (data: RegisterData, history: History) => void;
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
    async function fetch() {
      const res = await daisukiApi.post("/users/login", data);
      localStorage.setItem(
        "@Daisuki:token",
        JSON.stringify(res.data.accessToken)
      );
      setUser(res.data.user);
      setToken(res.data.access);
      history.push("/");
    }
    const myPromise = fetch();
    toast.promise(myPromise, {
      loading: "Enviando...",
      success: "Você logou!",
      error: "Tente novamente =c",
    });
  };

  const logout = () => {
    localStorage.removeItem("@Daisuki:token");
    setToken("");
  };

  const register = (data: RegisterData, history: History) => {
    async function fetch() {
      await daisukiApi.post("/users", data);
      history.push("/login");
    }
    const myPromise = fetch();
    toast.promise(myPromise, {
      loading: "Enviando...",
      success: "Conta criada com sucesso!",
      error: "Tente novamente =c",
    });
  };

  return (
    <UserContext.Provider value={{ token, login, register, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
