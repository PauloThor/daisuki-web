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
import Header from "../../components/Header";

const EpisodePage = () => {
  const param: ParamProps = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [episode, setEpisode] = useState<Episode[]>();
  console.log("teste");

  const episodio = {
    anime_name: "Hunter x Hunter",
    episode_number: 15,
    publicade_at: new Date(),
    video_url: "https://streamable.com/e/z8xs0a",
    all_episodes: "https://animedaisuki.vercel.app/animes/1",
  };

  // const loadEpisode = async () => {
  //   await daisukiApi
  //     .get(`/animes/${param.anime_name}/${param.episode_number}`)
  //     .then((res) => {
  //       console.log(res);
  //     });
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   loadEpisode();
  // }, []);

  //frameborder="0" width="100%" height="100%"  allowfullscreen

  return (
    <>
      <Header />
      {/* {loading ? (
        <SpinContainer>
          <Spin size="large" />
        </SpinContainer>
      ) : (
        <> </>
      )} */}
      <Main>
        <section>
          <Title>
            {episodio.anime_name.toUpperCase()} - EPISÓDIO{" "}
            {episodio.episode_number}
          </Title>
          <VideoPlayer>
            <Video src={episodio.video_url}></Video>
          </VideoPlayer>
          <EpisodeOptions>
            <TextOptions>
              <span>
                Publicado em: {episodio.publicade_at.toLocaleDateString()}
              </span>
              <span>
                <ListEpisodes href={episodio.all_episodes}>
                  <CardListIcon /> Mais episódios{" "}
                </ListEpisodes>
              </span>
            </TextOptions>
            <div>
              <ButtonPrevious>
                &lt; <TextButton>Anterior</TextButton>
              </ButtonPrevious>
              <ButtonNext>
                <TextButton>Próximo</TextButton> &gt;
              </ButtonNext>
            </div>
          </EpisodeOptions>
        </section>
        <section>
          <Comment>
            <ChatIcon /> Comentários:
          </Comment>
        </section>
      </Main>
    </>
  );
};

export default EpisodePage;
