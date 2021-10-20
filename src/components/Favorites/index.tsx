import { Favorite } from "../../model/favorite";
import { Banner, CloseIcon, Container, Text } from "../Profile/styles";
import { LinkAnime, Options, Pop, UnfavoriteIcon } from "./styles";
import BannerImage from "../../assets/img/profile-header.png";
import { useUser } from "../../hooks/User";
import { SpinContainer } from "../../pages/Home/styles";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { Anime } from "../../model/anime";
import StringUtils from "../../shared/util/string-utils";

interface FavoritesProps {
  list: Favorite[];
  onClose: () => void;
}

const Favorites = ({ onClose }: FavoritesProps) => {
  const { deleteFavorite, isLoading } = useUser();
  const { getFavoritesByPage, favorites } = useUser();
  const [favPage, setFavPage] = useState(1);
  const [list, setList] = useState<Anime[]>([]);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  const loadFavorites = async () => {
    const res = await getFavoritesByPage(favPage);
    setList(res);
  };

  useEffect(() => {
    loadFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = async () => {
    if (favorites.length !== list.length) {
      const wrappedElement = document.getElementById("opt");

      if (wrappedElement) {
        if (
          Math.ceil(wrappedElement.offsetHeight + wrappedElement.scrollTop) >=
          wrappedElement.scrollHeight
        ) {
          setScrolledToBottom(true);

          const res = await getFavoritesByPage(favPage + 1);
          if (res) {
            setList([...list, ...res]);
            setFavPage(favPage + 1);

            setTimeout(() => {
              setScrolledToBottom(false);
            }, 2000);
          }
        }
      }
    } else {
      setTimeout(() => {
        setScrolledToBottom(false);
      }, 1000);
    }
  };

  return (
    <Container>
      <CloseIcon size={30} onClick={onClose} />
      <Banner style={{ marginBottom: "1.5rem" }}>
        <Text>Favoritos</Text>
        <img alt="header" src={BannerImage} />
      </Banner>
      {isLoading ? (
        <SpinContainer>
          <Spin size="large" />
        </SpinContainer>
      ) : (
        <Options id="opt" onScroll={handleScroll}>
          {list.map((favorite, index) => (
            <LinkAnime
              key={index}
              to={`/animes/${StringUtils.urlMask(favorite.name)}`}
            >
              <p>{favorite.name}</p>
              <Pop
                title="Remover dos favoritos?"
                onConfirm={() => deleteFavorite(favorite?.id)}
                okText="Sim"
                cancelText="Não"
              >
                <UnfavoriteIcon size={30} />
              </Pop>
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

export default Favorites;
