import { Favorite } from "../../model/favorite";
import { Banner, CloseIcon, Container, Text } from "../Profile/styles";
import { Item, Options, Pop, UnfavoriteIcon } from "./styles";
import BannerImage from "../../assets/img/profile-header.png";
import { useUser } from "../../hooks/User";
import { SpinContainer } from "../../pages/Home/styles";
import { Spin } from "antd";

interface FavoritesProps {
  list: Favorite[];
  onClose: () => void;
}

const Favorites = ({ onClose, list }: FavoritesProps) => {
  const { deleteFavorite, isLoading } = useUser();

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
