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
import { Color } from "../../model/enums/theme-colors";

interface UserData {
  token: string;
  login: (data: LoginData, history: History, redirect?: boolean) => void;
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
  getFavoritesByPage: (page: number) => Promise<Anime[]>;
  getWatchedByPage: (page: number) => Promise<EpisodeHistory[]>;
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

  const login = (data: LoginData, history: History, redirect: boolean = false) => {
    setIsLoading(true);
    async function fetch() {
      await daisukiApi.post("/users/login", data).then((res) => {
        localStorage.setItem(
          "@Daisuki:token",
          JSON.stringify(res.data.accessToken)
        );
        setToken(res.data.accessToken);
        updateInfo();
        if (redirect) {
          history.push("/");
        }
      });
    }
    const myPromise = fetch();
    toast.promise(
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
    );
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
    const res = await daisukiApi.get(
      `/users/favorites?per_page=100`,
      headersJson
    );
    const output = res.data.data.map((favorite: Anime) => {
      return {
        id: favorite.id,
        name: favorite.name,
      };
    });
    setFavorites(output);
  };

  const getFavoritesByPage = async (page: number) => {
    const res = await daisukiApi.get(
      `/users/favorites?page=${page}&per_page=16`,
      headersJson
    );
    const output = res.data.data.map((favorite: Anime) => {
      return {
        id: favorite.id,
        name: favorite.name,
      };
    });
    return output;
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
    async function deleteAccount() {
      setIsLoading(true);
      const res = await daisukiApi.delete("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      logout();
      setIsLoading(false);
      return res.data;
    }
    const myPromise = deleteAccount();
    toast.promise(
      myPromise,
      {
        loading: "Enviando...",
        success: (data: UserInfo) => `Adeus ${data.username}!`,
        error: "Tente novamente =c",
      },
      {
        success: {
          icon: "😢 💔",
          style: {
            background: Color.MAIN_DARK,
            color: Color.TEXT_MAIN,
          },
          duration: 4000,
        },
      }
    );
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
      .catch(() => logout())
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
    const res = await daisukiApi.get(
      `/users/watched-episodes?&per_page=1000`,
      headers
    );
    setWatched(res.data.data);
  };

  const getWatchedByPage = async (page: number) => {
    const res = await daisukiApi.get(
      `/users/watched-episodes?page=${page}&per_page=16`,
      headersJson
    );
    // const output = res.data.data.map((watched_anime: Anime) => {
    //   return {
    //     anime: watched_anime.name,
    //     name: watched_anime.,
    //   };
    // });
    const output = res.data.data;
    return output;
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
        getFavoritesByPage,
        getWatchedByPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
