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
import { IdentityInfo, PasswordInfo, UserInfo } from "../../model/user";
import { LoginData, RegisterData } from "../../model/account";
import { Redirect } from "react-router";
import { EpisodeHistory } from "../../model/episode-history";

interface UserData {
  token: string;
  login: (data: LoginData, history: History) => void;
  register: (data: RegisterData, history: History) => void;
  logout: () => void;
  user: UserInfo;
  favorites: Anime[];
  getFavorites: () => void;
  postFavorite: (id: number) => void;
  deleteFavorite: (id?: number) => void;
  isLoading: boolean;
  updatePassword: (data: PasswordInfo, event?: () => void) => void;
  updateUser: (data: IdentityInfo, event?: () => void) => void;
  deleteSelf: () => void;
  updateAvatar: (image?: File, event?: () => void) => void;
  updateInfo: () => void;
  watched: EpisodeHistory[];
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserData>({} as UserData);

const localToken = localStorage.getItem("@Daisuki:token");

export const UserProvider = ({ children }: UserProviderProps) => {
  const [token, setToken] = useState<string>(
    !localToken ? "" : JSON.parse(localToken)
  );
  const [user, setUser] = useState<UserInfo>({} as UserInfo);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Anime[]>([]);
  const [watched, setWatched] = useState<EpisodeHistory[]>([]);

  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  const headersJson = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const login = (data: LoginData, history: History) => {
    setIsLoading(true);
    async function fetch() {
      await daisukiApi.post("/users/login", data).then((res) => {
        localStorage.setItem(
          "@Daisuki:token",
          JSON.stringify(res.data.accessToken)
        );
        setToken(res.data.accessToken);
        updateInfo();
        history.push("/");
      });
    }
    const myPromise = fetch();
    toast
      .promise(
        myPromise,
        {
          loading: "Enviando...",
          success: "Ohayou! ＼(≧▽≦)／",
          error: "Tente novamente =c",
        },
        {
          success: {
            icon: "✨✨",
          },
        }
      )
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
    setUser({});
  };

  const getFavorites = async () => {
    const res = await daisukiApi.get(`/users/favorites`, headersJson);
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
    setIsLoading(true);
    await daisukiApi.delete(`/users/favorites/${id}`, headers);
    getFavorites();
    setIsLoading(false);
  };

  const updatePassword = (data: PasswordInfo, event?: () => void) => {
    async function fetch() {
      await daisukiApi
        .patch("/users/update-password", data, headersJson)
        .then(() => {
          if (event) {
            event();
          }
        });
    }
    const myPromise = fetch();
    toast.promise(myPromise, {
      loading: "Enviando...",
      success: "Senha atualizada!",
      error: "Senha incorreta",
    });
  };

  const updateUser = (data: IdentityInfo, event?: () => void) => {
    async function fetch() {
      setIsLoading(true);
      await daisukiApi.patch("/users/update", data, headersJson).then((res) => {
        getSelf();
        if (event) {
          event();
        }
      });
      setIsLoading(false);
    }
    const myPromise = fetch();
    toast.promise(myPromise, {
      loading: "Enviando...",
      success: "Informações atualizadas!",
      error: "Tente novamente =c",
    });
  };

  const deleteSelf = () => {
    async function fetch() {
      setIsLoading(true);
      await daisukiApi.delete("/users", headers).then(() => {
        logout();
      });
      setIsLoading(false);
    }
    const myPromise = fetch();
    toast.promise(myPromise, {
      loading: "Enviando...",
      success: "Conta excluída!",
      error: "Tente novamente =c",
    });
    return <Redirect to="login" />;
  };

  const updateAvatar = (image?: File, event?: () => void) => {
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("image", image, image.name);

    async function fetch() {
      await daisukiApi
        .patch("/users/update-avatar", formData, headers)
        .then(() => {
          getSelf();
          if (event) {
            event();
          }
        });
    }
    const myPromise = fetch();
    toast.promise(myPromise, {
      loading: "Enviando...",
      success: "Informações atualizadas!",
      error: "Tente novamente =c",
    });
  };

  const getSelf = async () => {
    setIsLoading(true);
    await daisukiApi
      .get("/users/me", headers)
      .then((response) => {
        setUser(response.data);
      })
      .finally(() => setIsLoading(false));
  };

  const updateInfo = () => {
    if (!!token) {
      getSelf();
      getFavorites(); //TODO acrescentar paginação no visual e atualizar aqui
      getWatched();
    }
  };

  const getWatched = async () => {
    const res = await daisukiApi.get(`/users/watched-episodes`, headers);
    setWatched(res.data.data);
  };

  useEffect(() => {
    updateInfo();
    // eslint-disable-next-line
  }, [token]);

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
        getFavorites,
        deleteFavorite,
        isLoading,
        updatePassword,
        updateUser,
        deleteSelf,
        updateAvatar,
        updateInfo,
        watched,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
