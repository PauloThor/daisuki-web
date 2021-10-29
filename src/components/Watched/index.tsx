import { Banner, CloseIcon, Container, Text } from "../Profile/styles";
import BannerImage from "../../assets/img/profile-header.png";
import { useUser } from "../../hooks/User";
import SpinLoading from "../SpinLoading";
import { LinkAnime, Options } from "../Favorites/styles";
import { EpisodeHistory } from "../../model/episode-history";
import { useEffect, useState } from "react";
import StringUtils from "../../shared/util/string-utils";
import { SpinContainer } from "../../pages/Home/styles";
import { Spin } from "antd";

interface FavoritesProps {
  list: EpisodeHistory[];
  onClose: () => void;
}

const Watched = ({ onClose }: FavoritesProps) => {
  const { isLoading, getWatchedByPage, watched, token } = useUser();
  const [watchedPage, setWatchedPage] = useState(1);
  const [list, setList] = useState<EpisodeHistory[]>([]);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  const loadWatched = async () => {
    const res = await getWatchedByPage(watchedPage);
    setList(res);
  };

  useEffect(() => {
    if (!!token) {
      loadWatched();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = async () => {
    if (watched.length !== list.length) {
      const wrappedElement = document.getElementById("opt-watched");

      if (wrappedElement) {
        if (
          Math.ceil(wrappedElement.offsetHeight + wrappedElement.scrollTop) >=
          wrappedElement.scrollHeight
        ) {
          setScrolledToBottom(true);

          const res = await getWatchedByPage(watchedPage + 1);
          if (res) {
            setList([...list, ...res]);
            setWatchedPage(watchedPage + 1);

            setTimeout(() => {
              setScrolledToBottom(false);
            }, 2000);
          }
        }
      }
    } else {
      setTimeout(() => {
        setScrolledToBottom(false);
      }, 2000);
    }
  };

  return (
    <Container>
      <CloseIcon size={30} onClick={onClose} />
      <Banner style={{ marginBottom: "1.5rem" }}>
        <Text>Histórico</Text>
        <img alt="header" src={BannerImage} />
      </Banner>
      {isLoading ? (
        <SpinLoading />
      ) : (
        <Options id="opt-watched" onScroll={handleScroll}>
          {list.map((view, index) => (
            <LinkAnime
              key={index}
              to={`/animes/${StringUtils.urlMask(view.anime)}/${view.episode}`}
            >
              <p
                style={{ maxWidth: "100%" }}
              >{`${view.anime} - Episódio ${view.episode}`}</p>
            </LinkAnime>
          ))}
          {scrolledToBottom && (
            <SpinContainer style={{ height: "10vh" }}>
              <Spin size="large" />
            </SpinContainer>
          )}
        </Options>
      )}
    </Container>
  );
};

export default Watched;
