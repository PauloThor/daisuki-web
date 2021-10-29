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
  ButtonShowMore,
  ChatIcon,
  CommentTitle,
  ContainerComment,
  UserPicture,
  BoxLogin,
  ButtonLogin,
  CommentInput,
  ButtonComment,
  OptionsComment,
  ArrowDropDown,
  NoComment,
  OrderBy,
} from "./style";
import { Spin } from "antd";
import { Anime } from "../../model/anime";
import { useUser } from "../../hooks/User";
import React, { useState, useEffect } from "react";
import { Episode } from "../../model/episode";
import { ParamProps } from "../../model/param";
import { daisukiApi } from "../../services/api";
import { useHistory, useParams } from "react-router";
import { Comment } from "../../model/comment";
import Header from "../../components/Header";
import BackTop from "../../components/BackTop";
import DateUtils from "../../shared/util/date-utils";
import CommentCard from "../../components/CommentCard";
import StringUtils from "../../shared/util/string-utils";
import { ModalLogin } from "../../components/ModalLogin";
import { PopDrop } from "../../components/CommentCard/style";
import DefaultAvatar from "../../assets/img/default-user-avatar.png";
import Chat from "../../components/Chat";

const EpisodePage = () => {
  const param: ParamProps = useParams();
  const history = useHistory();

  const { user, token } = useUser();

  const [loading, setLoading] = useState<boolean>(true);

  const [episode, setEpisode] = useState<Episode>();
  const [anime, setAnime] = useState<Anime>();
  const [next, setNext] = useState<boolean>(false);
  const [previous, setPrevious] = useState<boolean>(false);

  const [comment, setComment] = useState<string>();
  const [loadingComments, setLoadingComments] = useState<boolean>(true);
  const [listComments, setListComments] = useState<Comment[]>([]);
  const [totalComments, setTotalComments] = useState<number>(0);
  const [actualPage] = useState<string>("page=1&per_page=10");
  const [nextPage, setNextPage] = useState<string>();
  const [ordered, setOrdered] = useState<boolean>(false);

  const [visible, setVisible] = useState(false);
  const [isModalLoginVisible, setIsModalLoginVisible] =
    useState<boolean>(false);

  const loadEpisode = async () => {
    await daisukiApi
      .get(`/animes/${param.name}/${param.episode_number}`)
      .then((res) => {
        setEpisode(res.data.data[0]);
        setAnime(res.data.anime);
        res.data.next && setNext(true);
        res.data.previous && setPrevious(true);

        daisukiApi.put(
          `/episodes/views/${res.data.data[0].id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      })
      .catch(() => history.push("/pageNotFound"));

    setLoading(false);
  };

  const loadComments = async (actualPage: string | undefined) => {
    await daisukiApi
      .get(`/episodes/${episode?.id}/comments?${actualPage}`)
      .then((res) => {
        setTotalComments(res.data.total);
        setListComments([...listComments, ...res.data.data]);
        setNextPage(res.data.next);
        setLoadingComments(false);
      });
  };

  const loadCommentsOrdered = async (actualPage: string | undefined) => {
    await daisukiApi
      .get(`/episodes/${episode?.id}/comments?order_by=true&${actualPage}`)
      .then((res) => {
        setTotalComments(res.data.total);
        setListComments([...listComments, ...res.data.data]);
        setNextPage(res.data.next);
        setLoadingComments(false);
      });
  };

  const handleEpisode = (nextEpisode?: boolean) => {
    setListComments([]);
    const previous_ep = Number(episode?.episodeNumber) - 1;
    const next_ep = Number(episode?.episodeNumber) + 1;
    history.push(
      `/animes/${StringUtils.urlMask(anime?.name)}/${
        nextEpisode ? next_ep : previous_ep
      }`
    );
    setLoading(true);
    setNext(false);
    setPrevious(false);
    setLoadingComments(true);
  };

  const handleComment = async () => {
    await daisukiApi
      .post(
        `/episodes/${episode?.id}/comments`,
        { content: comment },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setListComments([res.data, ...listComments]);
        setTotalComments(totalComments + 1);
        setComment("");
      });
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length < 511) {
      setComment(e.target.value);
    }
  };

  const handleDeleteComment = async (comment_id: number) => {
    await daisukiApi.delete(`/episodes/${episode?.id}/comments/${comment_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const filteredComments = listComments.filter(
      (comment) => comment.id !== comment_id
    );
    setListComments(filteredComments);
    setTotalComments(totalComments - 1);
  };

  const handleVisibleChange = (visible: React.SetStateAction<boolean>) => {
    setVisible(visible);
  };

  const handleModalLogin = () => {
    setIsModalLoginVisible(!isModalLoginVisible);
  };

  useEffect(() => {
    if (loading) {
      loadEpisode();
    }
    if (!ordered && episode && loadingComments && !loading) {
      loadComments(actualPage);
    }
    if (ordered && episode && loadingComments && !loading) {
      loadCommentsOrdered(actualPage);
    }
    // eslint-disable-next-line
  }, [episode, loadingComments]);

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
                  src="https://streamable.com/e/jhgpg5"
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
                      <CardListIcon />{" "}
                      {next || previous ? "Mais episódios" : "Mais informações"}
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
              <CommentTitle>
                <ChatIcon /> Comentários:
              </CommentTitle>
              <ContainerComment>
                {token ? (
                  <>
                    <UserPicture
                      alt="avatar"
                      src={user?.avatarUrl ?? DefaultAvatar}
                    />
                    <CommentInput
                      placeholder="Escreva algo..."
                      onChange={handleInput}
                      value={comment}
                    />
                    <ButtonComment onClick={() => handleComment()}>
                      Enviar
                    </ButtonComment>
                  </>
                ) : (
                  <BoxLogin>
                    Você precisa estar logado para comentar!
                    <ButtonLogin onClick={handleModalLogin}>Entrar</ButtonLogin>
                  </BoxLogin>
                )}
              </ContainerComment>
              {totalComments > 0 ? (
                <>
                  <OptionsComment>
                    <span>{totalComments} comentários</span>
                    <PopDrop
                      content={
                        <span
                          onClick={() => {
                            setVisible(false);
                            setLoadingComments(true);
                            setListComments([]);
                            setOrdered(!ordered);
                          }}
                        >
                          {ordered ? "Mais recentes" : "Mais antigos"}
                        </span>
                      }
                      trigger="click"
                      placement="bottom"
                      visible={visible}
                      onVisibleChange={handleVisibleChange}
                    >
                      <OrderBy>
                        Ordenar por <ArrowDropDown />
                      </OrderBy>
                    </PopDrop>
                  </OptionsComment>
                  {loadingComments && !loading ? (
                    <SpinContainer>
                      <Spin size="large" />
                    </SpinContainer>
                  ) : (
                    <ul>
                      {listComments.map((comment: Comment) => (
                        <li key={comment?.id}>
                          <CommentCard
                            comment={comment}
                            handleDelete={() =>
                              handleDeleteComment(comment?.id)
                            }
                            visible={
                              user?.id === comment.user.id ||
                              user?.permission === "mod" ||
                              user?.permission === "admin"
                            }
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                  <ButtonShowMore
                    onClick={() => {
                      ordered
                        ? loadCommentsOrdered(nextPage)
                        : loadComments(nextPage);
                    }}
                    disabled={!nextPage}
                  >
                    Mostrar mais
                  </ButtonShowMore>
                </>
              ) : (
                <NoComment>Seja o primeiro a comentar!</NoComment>
              )}
            </section>
          </Main>
        )
      )}
      <ModalLogin
        isModalLoginVisible={isModalLoginVisible}
        handleModalLogin={handleModalLogin}
      />
      <BackTop />
      {!!token && <Chat />}
    </>
  );
};

export default EpisodePage;
