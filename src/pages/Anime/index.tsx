import {
  Category,
  Container,
  Footer,
  InfoAnime,
  ListEpisodes,
  SpinContainer,
  StyledCollapse,
  StyledListEpisodes,
  Synopsis,
  Categories,
  Details,
  RateContainer,
  AnimeData,
  HeaderAnimeData,
  AnimeCover,
  AnimeEpisode,
} from "./styles";
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import { Rate, Spin, Collapse } from "antd";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { ModalSynopsis } from "../../components/ModalSynopsis";
import NotFound from "../NotFound";
import { daisukiApi } from "../../services/api";
import { Anime } from "../../model/anime";
import { Episode } from "../../model/episode";
import { ParamProps } from "../../model/param";
import FavIcon from "../../assets/img/fav-icon.svg";
import BackTop from "../../components/BackTop";
import { useUser } from "../../hooks/User";
import { ModalToLogin } from "../../components/ModalToLogin";

const AnimePage = () => {
  const param: ParamProps = useParams();
  const history = useHistory();
  const { token } = useUser();
  const { Panel } = Collapse;

  const [anime, setAnime] = useState<Anime>();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [episodesPerPage, setEpisodesPerPage] = useState<[Episode[]]>([[]]);

  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isInvalidLink, setIsInvalidLink] = useState<boolean>(false);

  const [isModalSynopsisVisible, setIsModalSynopsisVisible] =
    useState<boolean>(false);
  const [isModalToLoginVisible, setIsModalToLoginVisible] =
    useState<boolean>(false);

  const loadAnime = async () => {
    const isValidAnime = await daisukiApi
      .get(`/animes/${param.name}`)
      .then((response) => {
        if (response?.data) {
          setAnime(response.data);
          if (response.data.rating) {
            setAnimeRate(response.data.rating);
          }
          return true;
        } else {
          setIsInvalidLink(true);
          return false;
        }
      });

    if (isValidAnime) {
      await loadEpisodes();
      setIsLoad(true);
    } else {
      setIsLoad(true);
    }
  };

  const loadEpisodes = async () => {
    if (anime?.totalEpisodes) {
      if (anime.totalEpisodes > 24) {
        for (let counter = 24; counter <= anime.totalEpisodes; counter += 24) {
          daisukiApi
            .get(`/animes/${param.name}/episodes?page=${counter / 24}`)
            .then((response) => {
              if (episodesPerPage[0][0] !== undefined) {
                const listEpisodes = [...episodesPerPage, response?.data.data];
                setEpisodesPerPage([listEpisodes]);
              } else {
                setEpisodesPerPage([response.data.data]);
              }
            });
        }
      }
    } else {
      daisukiApi.get(`/animes/${param.name}/episodes`).then((response) => {
        setEpisodes(response?.data.data);
      });
    }
  };

  useEffect(() => {
    loadAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [animeRate, setAnimeRate] = useState(5.0);
  const handleRate = async (value: number) => {
    await setRating(value);
    setTimeout(() => {
      loadAnime();
    }, 1000);
  };

  const setRating = async (value: number) => {
    if (!token) {
      handleModalToLogin();
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
        .then((response) => console.log("Anime avaliado!"))
        .catch((e) => console.log("Algo deu errado, tente novamente!"));
    }
  };

  const handleModalSynopsis = () => {
    setIsModalSynopsisVisible(!isModalSynopsisVisible);
  };

  const handleModalToLogin = () => {
    setIsModalToLoginVisible(!isModalToLoginVisible);
  };

  const handleToEpisode = (id: number) => {
    history.push(`/animes/${param.name}/episodes/${id}`);
  };

  return (
    <>
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
                <HeaderAnimeData favIcon={FavIcon}>
                  <h1>{anime.name}</h1>
                  <button type="button" />
                </HeaderAnimeData>
                <RateContainer>
                  <Rate onChange={handleRate} value={animeRate} allowHalf />
                  {animeRate ? (
                    <span className="ant-rate-text">
                      {animeRate.toFixed(2)}
                    </span>
                  ) : (
                    ""
                  )}
                </RateContainer>
                <Details>
                  <p>Áudio: {anime.isDubbed ? "Português" : "Japonês"}</p>
                  <p>Episódios: {anime.totalEpisodes}</p>
                  <p>
                    {anime.isMovie
                      ? `Lançamento: ${new Intl.DateTimeFormat("pt-BR").format(
                          new Date(anime.createdAt || "")
                        )}`
                      : `Status: ${
                          anime.isCompleted ? "Encerrado" : "Em lançamento"
                        }`}
                  </p>
                  <Categories>
                    <Category to="">Ação</Category>
                    <Category to="">Shõnen</Category>
                    <Category to="">Aventura</Category>
                  </Categories>
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

            {episodesPerPage[0][0] !== undefined ? (
              episodesPerPage.map((list) => (
                <>
                  <StyledCollapse defaultActiveKey={["0"]} bordered={false}>
                    <Panel
                      header={
                        <span>
                          Episódios:{" "}
                          {episodesPerPage.indexOf(list) !== 0
                            ? 1 * episodesPerPage.indexOf(list)
                            : 1}
                          {" - "}
                          {episodesPerPage.indexOf(list) !== 0
                            ? 24 * episodesPerPage.indexOf(list)
                            : list.length}
                        </span>
                      }
                      key={episodesPerPage.indexOf(list)}
                      style={{ color: "white" }}
                    >
                      <StyledListEpisodes>
                        {list.map((epi) => (
                          <AnimeEpisode
                            watched={false}
                            key={epi.id}
                            onClick={() =>
                              handleToEpisode(
                                epi.episodeNumber ? epi.episodeNumber : 1
                              )
                            }
                          >
                            {anime.isMovie
                              ? anime.name
                              : `Episódio ${epi.episodeNumber}`}
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
                    watched={false}
                    key={epi.id}
                    onClick={() =>
                      handleToEpisode(epi.episodeNumber ? epi.episodeNumber : 1)
                    }
                  >
                    {anime.isMovie
                      ? `${anime.name} - Filme`
                      : `Episódio ${epi.episodeNumber}`}
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
            <ModalToLogin
              isModalToLoginVisible={isModalToLoginVisible}
              handleModalToLogin={handleModalToLogin}
            />
          </Container>
        </>
      )}

      {isInvalidLink && isLoad && <NotFound />}
    </>
  );
};

export default AnimePage;
