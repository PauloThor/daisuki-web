import {
  Container,
  Footer,
  InfoAnime,
  ListEpisodes,
  SpinContainer,
  StyledCollapse,
  StyledListEpisodes,
  Synopsis,
  Details,
  RateContainer,
  AnimeData,
  HeaderAnimeData,
  AnimeCover,
  AnimeEpisode,
  StyledLink,
  Genre,
  Genres,
} from "./styles";
import { useParams, useHistory } from "react-router";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Rate, Spin, Collapse } from "antd";
import Motion from "../../components/Motion";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { ModalSynopsis } from "../../components/ModalSynopsis";
import NotFound from "../NotFound";
import { daisukiApi } from "../../services/api";
import { Anime } from "../../model/anime";
import { Episode } from "../../model/episode";
import { ParamProps } from "../../model/param";
import { FaHeart, FaHeartBroken, FaRegHeart } from "react-icons/fa";
import BackTop from "../../components/BackTop";
import { useUser } from "../../hooks/User";
import { ModalLogin } from "../../components/ModalLogin";
import toast from "react-hot-toast";
import { returnStars } from "../../shared/util/anime-utils";
import { Color } from "../../model/enums/theme-colors";
import { genresToEnglish } from "../../shared/util/genre-utils";
import Chat from "../../components/Chat";

const AnimePage = () => {
  const param: ParamProps = useParams();
  const { token, getFavorites, favorites } = useUser();
  const { Panel } = Collapse;
  const history = useHistory();

  const [anime, setAnime] = useState<Anime>();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [animeRate, setAnimeRate] = useState(0);
  const [ativAllowHalf, setAtivAllowHalf] = useState(true);

  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isInvalidLink, setIsInvalidLink] = useState<boolean>(false);

  const [isModalSynopsisVisible, setIsModalSynopsisVisible] =
    useState<boolean>(false);
  const [isModalLoginVisible, setIsModalLoginVisible] =
    useState<boolean>(false);

  const loadAnime = async () => {
    await daisukiApi
      .get(`/animes/${param.name}`)
      .then((response) => {
        if (response?.data) {
          setAnime(response.data);
          loadEpisodes();
          setIsLoad(true);
          if (response.data.rating) {
            setAnimeRate(response.data.rating);
          }
          return true;
        } else {
          setIsInvalidLink(true);
          return false;
        }
      })
      .catch((e) => {
        setIsInvalidLink(true);
        history.push("/pageNotFound");
        return false;
      });
  };

  const loadEpisodes = async (params = "page=1&per_page=24") => {
    if (!!token) {
      await daisukiApi
        .get(`/animes/${param.name}/episodes?per_page=50`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setEpisodes(response.data.data);
        });
    }
    if (!token) {
      await daisukiApi
        .get(`/animes/${param.name}/episodes?per_page=50`)
        .then((response) => {
          setEpisodes(response.data.data);
        });
    }

    // if (res.length === 24) {
    //   daisukiApi
    //     .get(`/animes/${param.name}/episodes?per_page=${50}`)
    //     .then((response) => {
    //       setEpisodes(response.data.data);
    //     });
    // } else {
    //   setEpisodes(res);
    // }
  };

  useEffect(() => {
    loadAnime();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadAnime();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  const handleRate = async (value: number) => {
    await setRating(value);
    setTimeout(() => {
      daisukiApi
        .get(`/animes/${param.name}/rating`)
        .then((response) => {
          setAnimeRate(response.data.rating);
          return true;
        })
        .catch((e) => {
          toast.error("falhou");
          return false;
        });
    }, 1000);
  };

  const setRating = async (value: number) => {
    if (value === 0) {
      value = animeRate;
    }
    if (!token) {
      handleModalLogin();
    } else {
      daisukiApi
        .put(
          `/animes/${anime?.id}/ratings`,
          {
            rating: value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) =>
          toast(`Anime avaliado com ${returnStars(value)}`, {
            style: {
              borderRadius: "10px",
              background: Color.HIGHLIGHT,
              color: "#fff",
            },
          })
        )
        .catch((e) => toast.error("Algo deu errado, tente novamente!"));
    }
  };

  const handleModalSynopsis = () => {
    setIsModalSynopsisVisible(!isModalSynopsisVisible);
  };

  const handleModalLogin = () => {
    setIsModalLoginVisible(!isModalLoginVisible);
  };

  const handleFavoriteAnime = () => {
    if (!token) {
      handleModalLogin();
    } else if (!isFavorite) {
      daisukiApi
        .put(`/users/favorites/${anime?.id}`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          getFavorites();
          toast(`Anime favoritado!`, {
            icon: "💙",
            style: {
              borderRadius: "10px",
              background: Color.HIGHLIGHT_DARK,
              color: "#fff",
            },
          });
        })
        .catch((e) => toast.error("Falha ao favoritar, tente novamente!"));
    } else {
      daisukiApi
        .delete(`/users/favorites/${anime?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          getFavorites();

          toast(`Anime removido dos favoritos!`, {
            icon: "💔",
            style: {
              borderRadius: "10px",
              background: Color.MAIN_DARK,
              color: "#fff",
            },
          });
        })
        .catch((e) => toast.error("Algo deu errado, tente novamente!"));
    }
  };

  const handleAllowHalf = () => {
    setAtivAllowHalf(!ativAllowHalf);
  };

  const setPerPage = (list: Episode[]) => {
    let output = [];
    for (let i = 0; i < list.length; i = i + 24) {
      output.push(list.slice(i, i + 24));
    }
    return output;
  };

  const isFavorite = favorites.find((f) => f.id === anime?.id);
  const EpsPerPage = setPerPage(episodes);

  return (
    <>
      <Helmet>
        <title>{`Anime Daisuki! | ${anime?.name ?? ""}`}</title>
      </Helmet>
      <Motion>
        {!isLoad && (
          <>
            <Header />
            <SpinContainer>
              <Spin size="large" />
            </SpinContainer>
          </>
        )}
        {anime && (
          <>
            <Header />
            <Container>
              <InfoAnime>
                <AnimeData>
                  <HeaderAnimeData isFavorite={!!isFavorite}>
                    <h1>{anime.name}</h1>
                    <button type="button" onClick={handleFavoriteAnime}>
                      {isLoad && !isFavorite && !token && <FaRegHeart />}
                      {token && isFavorite && <FaHeart />}
                      {isLoad && token && !isFavorite && <FaRegHeart />}
                      <span>
                        {isFavorite ? <FaHeartBroken /> : <FaHeart />}
                      </span>
                    </button>
                  </HeaderAnimeData>
                  <RateContainer
                    onMouseOver={handleAllowHalf}
                    onMouseOut={handleAllowHalf}
                  >
                    <Rate
                      onChange={handleRate}
                      value={animeRate}
                      allowHalf={ativAllowHalf}
                    />
                    <span className="ant-rate-text">
                      {animeRate ? animeRate.toFixed(2) : "N/A"}
                    </span>
                  </RateContainer>
                  <Details>
                    <p>Áudio: {anime.isDubbed ? "Português" : "Japonês"}</p>
                    <p>Episódios: {anime.totalEpisodes}</p>
                    <p>
                      {anime.isMovie
                        ? `Lançamento: ${new Intl.DateTimeFormat(
                            "pt-BR"
                          ).format(new Date(anime.createdAt || ""))}`
                        : `Status: ${
                            anime.isCompleted ? "Completo" : "Em lançamento"
                          }`}
                    </p>
                    <Genres>
                      {anime.genres &&
                        anime.genres.map((genre) => (
                          <Genre to={`/genres/${genresToEnglish[genre.name]}`}>
                            {genre.name}
                          </Genre>
                        ))}
                    </Genres>
                    <Synopsis>
                      <strong> Sinopse:</strong> {anime.synopsis}
                    </Synopsis>
                  </Details>
                </AnimeData>
                <AnimeCover>
                  <img src={anime.imageUrl} alt="anime cover" />
                  <Button
                    text="Ver Sinopse"
                    margin="0 8px"
                    handleClick={handleModalSynopsis}
                  />
                </AnimeCover>
              </InfoAnime>

              {episodes.length > 24 ? (
                EpsPerPage.map((list) => (
                  <>
                    <StyledCollapse defaultActiveKey={["0"]} bordered={false}>
                      <Panel
                        header={
                          <span>
                            Episódios:{" "}
                            {EpsPerPage.indexOf(list) !== 0
                              ? 24 * EpsPerPage.indexOf(list) + 1
                              : 1}
                            {" - "}
                            {EpsPerPage.indexOf(list) !== 0
                              ? 24 * EpsPerPage.indexOf(list) + list.length
                              : list.length}
                          </span>
                        }
                        key={EpsPerPage.indexOf(list)}
                        style={{ color: "white" }}
                      >
                        <StyledListEpisodes>
                          {list.map((epi) => (
                            <AnimeEpisode
                              watched={epi?.hasWatched ?? false}
                              key={epi.id}
                            >
                              <StyledLink
                                to={`/animes/${param.name}/${
                                  epi.episodeNumber ? epi.episodeNumber : 1
                                }`}
                              >
                                {anime.isMovie
                                  ? anime.name
                                  : `Episódio ${epi.episodeNumber}`}
                              </StyledLink>
                            </AnimeEpisode>
                          ))}
                        </StyledListEpisodes>
                      </Panel>
                    </StyledCollapse>
                  </>
                ))
              ) : (
                <ListEpisodes>
                  {episodes.map((epi) => (
                    <AnimeEpisode
                      watched={epi?.hasWatched ?? false}
                      key={epi.id}
                    >
                      <StyledLink
                        to={`/animes/${param.name}/${
                          epi.episodeNumber ? epi.episodeNumber : 1
                        }`}
                      >
                        {anime.isMovie
                          ? `${anime.name} - Filme`
                          : `Episódio ${epi.episodeNumber}`}
                      </StyledLink>
                    </AnimeEpisode>
                  ))}
                </ListEpisodes>
              )}
              <Footer />
              <BackTop />
              <ModalSynopsis
                handleModalSynopsis={handleModalSynopsis}
                isModalSynopsisVisible={isModalSynopsisVisible}
                synopsis={anime.synopsis || ""}
              />
              <ModalLogin
                isModalLoginVisible={isModalLoginVisible}
                handleModalLogin={handleModalLogin}
              />
            </Container>
          </>
        )}
      </Motion>

      {isInvalidLink && isLoad && <NotFound />}
      {!!token && <Chat />}
    </>
  );
};

export default AnimePage;
