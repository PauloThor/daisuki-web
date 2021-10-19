import { Favorite } from "../../model/favorite";
import { Banner, CloseIcon, Container, Text } from "../Profile/styles";
import { Item, Options, Pop, UnfavoriteIcon } from "./styles";
import BannerImage from "../../assets/img/profile-header.png";
import { useUser } from "../../hooks/User";
import { SpinContainer } from "../../pages/Home/styles";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { Anime } from "../../model/anime";

interface FavoritesProps {
  list: Favorite[];
  onClose: () => void;
}

const Favorites = ({ onClose }: FavoritesProps) => {
  const { deleteFavorite, isLoading } = useUser();
  const { getFavoritesByPage } = useUser();
  const [favPage, setFavPage] = useState(1);
  const [list, setList] = useState<Anime[]>([]);

  const loadFavorites = async () => {
    const res = await getFavoritesByPage(favPage);
    setList(res);
  };

  useEffect(() => {
    loadFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = async () => {
    const res = await getFavoritesByPage(favPage + 1);
    setList([...list, ...res]);
    setFavPage(favPage + 1);
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
        <Options>
          {list.map((favorite, index) => (
            <Item key={index}>
              <p>{favorite.name}</p>
              <Pop
                title="Remover dos favoritos?"
                onConfirm={() => deleteFavorite(favorite?.id)}
                okText="Sim"
                cancelText="Não"
              >
                <UnfavoriteIcon size={30} />
              </Pop>
            </Item>
          ))}
        </Options>
      )}
    </Container>
  );
};

export default Favorites;
