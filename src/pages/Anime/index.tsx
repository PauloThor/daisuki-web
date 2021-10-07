import {
  Category,
  Container,
  InfoAnime,
  ListEpisodes,
  SpinContainer,
} from "./styles";
import { BackTop, Rate } from "antd";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useParams } from "react-router";
import { daisukiApi } from "../../services/api";
import { AnimeProps } from "../../model/anime";
import NotFound from "../NotFound";
import { Spin } from "antd";
import FavIcon from "../../assets/img/fav-icon.svg";
import { Episode } from "../../model/episode";

interface ParamProps {
  id: string;
}

const Anime = () => {
  const params: ParamProps = useParams();

  const [anime, setAnime] = useState<AnimeProps>();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isInvalidLink, setIsInvalidLink] = useState<boolean>(false);

  const loadAnime = async () => {
    const isValidAnime = await daisukiApi
      .get(`/animes/${params.id}`)
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
    daisukiApi.get(`/animes/${params.id}/episodes`).then((response) => {
      setEpisodes(response?.data.episodes);
    });
  };

  useEffect(() => {
    loadAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [animeRate, setAnimeRate] = useState(5);
  const desc = ["1.00", "2.00", "3.00", "4.00", String(animeRate.toFixed(2))];

  const handleRate = (value: number) => {
    setAnimeRate(value);
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
            <InfoAnime favIcon={FavIcon}>
              <div className="container-data">
                <div className="header">
                  <h1>{anime.name}</h1>
                  <button type="button" />
                </div>
                <div className="rate-container">
                  <Rate
                    tooltips={desc}
                    onChange={handleRate}
                    value={animeRate}
                  />
                  {animeRate ? (
                    <span className="ant-rate-text">{desc[animeRate - 1]}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="details">
                  <p>Áudio: {anime.is_dubbed ? "Português" : "Japonês"}</p>
                  <p>Episódios: {anime.total_episodes}</p>
                  <p>
                    Status: {anime.is_completed ? "Encerrado" : "Em lançamento"}
                  </p>
                  <div className="categories">
                    <Category>Ação</Category>
                    <Category>Shõnen</Category>
                    <Category>Aventura</Category>
                  </div>
                  <p className="synopsis">
                    <strong> Sinopse:</strong> {anime.synopsis}
                  </p>
                </div>
              </div>
              <div className="container-image">
                <img src={anime.image_url} alt="anime cover" />
                <Button text="Ver Sinopse" margin="8px 0" />
              </div>
            </InfoAnime>

            <ListEpisodes>
              {episodes.map((epi) => (
                <li key={epi.id}>Episódio {epi.episode_number}</li>
              ))}
            </ListEpisodes>
            <BackTop />
          </Container>
        </>
      )}

      {isInvalidLink && isLoad && <NotFound />}
    </>
  );
};

export default Anime;
