import { Favorite } from "../../model/favorite";
import { Banner, CloseIcon, Container, Text } from "../Profile/styles";
import { Item, Options, Pop, UnfavoriteIcon } from "./styles";
import BannerImage from "../../assets/img/profile-header.png";

interface FavoritesProps {
  list: Favorite[];
  onClose: () => void;
}

const Favorites = ({ onClose, list }: FavoritesProps) => {
  return (
    <Container>
      <CloseIcon size={30} onClick={onClose} />
      <Banner style={{ marginBottom: "1.5rem" }}>
        <Text>Favoritos</Text>
        <img alt="header" src={BannerImage} />
      </Banner>
      <Options>
        {list.map((favorite) => (
          <Item>
            <p>{favorite.name}</p>
            <Pop
              title="Remover dos favoritos?"
              onConfirm={() => console.log("a")}
              okText="Sim"
              cancelText="Não"
            >
              <UnfavoriteIcon size={30} />
            </Pop>
          </Item>
        ))}
      </Options>
    </Container>
  );
};

export default Favorites;
