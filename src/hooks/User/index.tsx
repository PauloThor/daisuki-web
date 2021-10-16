import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { History } from "history";
import { daisukiApi } from "../../services/api";
import { Anime } from "../../model/anime";
import { toast } from "react-hot-toast";
import jwt_decode from "jwt-decode";
import { Info, UserInfo } from "../../model/user";

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
  favorites: Anime[];
  postFavorite: (id: number) => void;
  deleteFavorite: (id?: number) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserData>({} as UserData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [token, setToken] = useState<string>(
    JSON.parse(localStorage.getItem("@Daisuki:token") ?? "")
  );
  const [favorites, setFavorites] = useState<Anime[]>([]);

  const [user, setUser] = useState<UserInfo>({} as UserInfo);

  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

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

  const logout = () => {
    localStorage.removeItem("@Daisuki:token");
    setToken("");
  };

  const getFavorites = async () => {
    const res = await daisukiApi.get(`/users/favorites`, headers);
    console.log(res);
    const output = res.data.data.map((favorite: Anime) => {
      return {
        id: favorite.id,
        name: favorite.name,
      };
    });
    setFavorites(output);
  };

  const postFavorite = async (id: number) => {
    await daisukiApi.put(`/users/favorites/${id}`, headers);
  };

  const deleteFavorite = async (id?: number) => {
    if (!id) {
      return;
    }
    await daisukiApi.delete(`/users/favorites/${id}`, headers);
  };

  useEffect(() => {
    if (!token) {
      return;
    }

    getFavorites(); //TODO acrescentar paginação no visual e atualizar aqui

    const info: Info = jwt_decode(token);
    setUser(info.sub);
    // eslint-disable-next-line
  }, []);

  return (
    <UserContext.Provider
      value={{
        token,
        login,
        register,
        logout,
        user,
        favorites,
        postFavorite,
        deleteFavorite,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
