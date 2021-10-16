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
  favorites: Anime[];
  postFavorite: (id: number) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserData>({} as UserData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("@Daisuki:token") ?? ""
  );
  const [favorites, setFavorites] = useState<Anime[]>([]);

  const [user, setUser] = useState({});

  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  const login = (data: LoginData, history: History) => {
    daisukiApi
      .post("/users", data)
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

  const getFavorites = async (page: number, per_page: number) => {
    const res = await daisukiApi.get(
      `/users/favorites?page=${page}&per_page=${per_page}`,
      headers
    );
    const output = res.data.map((favorite: Anime) => {
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

  useEffect(() => {
    if (!token) {
      return;
    }

    getFavorites(1, 10); //TODO acrescentar paginação no visual e atualizar aqui
    // eslint-disable-next-line
  }, []);

  const deleteFavorite = async (id: number) => {
    await daisukiApi.delete(`/users/favorites/${id}`, headers);
  };

  return (
    <UserContext.Provider
      value={{ token, login, logout, user, favorites, postFavorite }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
