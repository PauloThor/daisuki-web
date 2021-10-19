import { Spin } from "antd";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import {
  SpinContainer,
  Main,
  VideoPlayer,
  Video,
  Title,
  EpisodeOptions,
  TextOptions,
  ListEpisodes,
  CardListIcon,
  TextButton,
  ButtonPrevious,
  ButtonNext,
  ChatIcon,
  Comment,
} from "./style";
import { daisukiApi } from "../../services/api";
import { ParamProps } from "../../model/param";
import { Episode } from "../../model/episode";
import { Anime } from "../../model/anime";
import Header from "../../components/Header";
import DateUtils from "../../shared/util/date-utils";
import StringUtils from "../../shared/util/string-utils";

const EpisodePage = () => {
  const param: ParamProps = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(true);
  const [episode, setEpisode] = useState<Episode>();
  const [anime, setAnime] = useState<Anime>();
  const [next, setNext] = useState<boolean>(false);
  const [previous, setPrevious] = useState<boolean>(false);

  const loadEpisode = async () => {
    await daisukiApi
      .get(`/animes/${param.name}/${param.episode_number}`)
      .then((res) => {
        console.log(res);
        setEpisode(res.data.data[0]);
        setAnime(res.data.anime);
        res.data.next && setNext(true);
        res.data.previous && setPrevious(true);
      });
    setLoading(false);
  };

  const EmbledVideo = (episode?: string) => {
    let episodeArray: any = episode?.split("/");
    const lastValue = episodeArray.pop();
    episodeArray = [...episodeArray, "e", lastValue];
    return episodeArray.join("/");
  };

  const handleEpisode = (nextEpisode?: boolean) => {
    const previous_ep = Number(episode?.episodeNumber) - 1;
    const next_ep = Number(episode?.episodeNumber) + 1;
    return history.push(
      `/animes/${StringUtils.urlMask(anime?.name)}/${
        nextEpisode ? next_ep : previous_ep
      }`
    );
  };

  useEffect(() => {
    loadEpisode();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <SpinContainer>
          <Spin size="large" />
        </SpinContainer>
      ) : (
        episode && (
          <Main>
            <section>
              <Title>
                {anime?.name?.toUpperCase()} - EPISÓDIO {episode?.episodeNumber}
              </Title>
              <VideoPlayer>
                <Video
                  src={EmbledVideo(episode.videoUrl)}
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  allowFullScreen
                ></Video>
              </VideoPlayer>
              <EpisodeOptions>
                <TextOptions>
                  <span>
                    Publicado em: {DateUtils.StringToDate(episode?.createdAt)}
                  </span>
                  <span>
                    <ListEpisodes
                      to={`/animes/${StringUtils.urlMask(anime?.name)}`}
                    >
                      <CardListIcon /> Mais episódios
                    </ListEpisodes>
                  </span>
                </TextOptions>
                <div>
                  {previous && (
                    <ButtonPrevious
                      type="button"
                      onClick={() => handleEpisode()}
                    >
                      &lt; <TextButton>Anterior</TextButton>
                    </ButtonPrevious>
                  )}
                  {next && (
                    <ButtonNext
                      type="button"
                      onClick={() => handleEpisode(true)}
                    >
                      <TextButton>Próximo</TextButton> &gt;
                    </ButtonNext>
                  )}
                </div>
              </EpisodeOptions>
            </section>
            <section>
              <Comment>
                <ChatIcon /> Comentários:
              </Comment>
            </section>
          </Main>
        )
      )}
    </>
  );
};

export default EpisodePage;
