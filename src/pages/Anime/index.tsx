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
import { BackTop, Rate, Spin, Collapse } from "antd";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { ModalSynopsis } from "../../components/ModalSynopsis";
import NotFound from "../NotFound";
import { daisukiApi } from "../../services/api";
import { Anime } from "../../model/anime";
import { Episode } from "../../model/episode";
import { ParamProps } from "../../model/param";
import FavIcon from "../../assets/img/fav-icon.svg";

const AnimePage = () => {
  const param: ParamProps = useParams();
  const history = useHistory();
  const { Panel } = Collapse;

  const [anime, setAnime] = useState<Anime>();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isInvalidLink, setIsInvalidLink] = useState<boolean>(false);
  const [isModalSynopsisVisible, setIsModalSynopsisVisible] =
    useState<boolean>(false);

  const loadAnime = async () => {
    const isValidAnime = await daisukiApi
      .get(`/animes/${param.id}`)
      .then((response) => {
        if (response?.data?.anime) {
          setAnime(response.data.anime);
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
    daisukiApi.get(`/animes/${param.id}/episodes`).then((response) => {
      setEpisodes(response?.data.episodes);
    });
  };

  useEffect(() => {
    loadAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO integrar com a nota do anime quando o backend ficar pronto.
  const [animeRate, setAnimeRate] = useState(3.8);

  const handleRate = (value: number) => {
    setAnimeRate(value);
  };

  const handleModalSynopsis = () => {
    setIsModalSynopsisVisible(!isModalSynopsisVisible);
  };

  const handleToEpisode = (id: number) => {
    history.push(`/animes/${param.id}/episodes/${id}`);
  };

  const getListsEpisodes = () => {
    let output: [Episode[]] = [[]];
    let outputIndex = 0;
    for (let counter = 0; counter < episodes.length; counter++) {
      if (output[outputIndex].length < 24) {
        output[outputIndex].push(episodes[counter]);
      } else {
        output[outputIndex + 1] = [episodes[counter]];
        outputIndex++;
      }
    }
    return output;
  };

  const episodesList = getListsEpisodes();

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
                  <Rate onChange={handleRate} value={animeRate} />
                  {animeRate ? (
                    <span className="ant-rate-text">
                      {animeRate.toFixed(2)}
                    </span>
                  ) : (
                    ""
                  )}
                </RateContainer>
                <Details>
                  <p>Áudio: {anime.is_dubbed ? "Português" : "Japonês"}</p>
                  <p>Episódios: {anime.total_episodes}</p>
                  <p>
                    {anime.is_movie
                      ? `Lançamento: ${new Intl.DateTimeFormat("pt-BR").format(
                          new Date(anime.created_at || "")
                        )}`
                      : `Status: ${
                          anime.is_completed ? "Encerrado" : "Em lançamento"
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
                <img src={anime.image_url} alt="anime cover" />
                <Button
                  text="Ver Sinopse"
                  margin="0 8px"
                  handleClick={handleModalSynopsis}
                />
              </AnimeCover>
            </InfoAnime>

            {episodes.length > 24 ? (
              episodesList.map((list) => (
                <>
                  <StyledCollapse defaultActiveKey={["0"]} bordered={false}>
                    <Panel
                      header={
                        <span>
                          Episódios:{" "}
                          {episodesList.indexOf(list) !== 0
                            ? 1 * episodesList.indexOf(list)
                            : 1}
                          {" - "}
                          {episodesList.indexOf(list) !== 0
                            ? 24 * episodesList.indexOf(list)
                            : list.length}
                        </span>
                      }
                      key={episodesList.indexOf(list)}
                      style={{ color: "white" }}
                    >
                      <StyledListEpisodes>
                        {list.map((epi) => (
                          <AnimeEpisode
                            watched={false}
                            key={epi.id}
                            onClick={() =>
                              handleToEpisode(
                                epi.episode_number ? epi.episode_number : 1
                              )
                            }
                          >
                            {anime.is_movie
                              ? anime.name
                              : `Episódio ${epi.episode_number}`}
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
                      handleToEpisode(
                        epi.episode_number ? epi.episode_number : 1
                      )
                    }
                  >
                    {anime.is_movie
                      ? `${anime.name} - Filme`
                      : `Episódio ${epi.episode_number}`}
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
          </Container>
        </>
      )}

      {isInvalidLink && isLoad && <NotFound />}
    </>
  );
};

export default AnimePage;
