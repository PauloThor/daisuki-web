import { Favorite } from "../../model/favorite";
import { Banner, CloseIcon, Container, Text } from "../Profile/styles";
import { Item, Options, UnfavoriteIcon } from "./styles";
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
        <img alt="header" src={BannerImage} />
        <Text>Favoritos</Text>
      </Banner>
      <Options>
        {list.map((favorite) => (
          <Item>
            <p>{favorite.name}</p>
            <UnfavoriteIcon size={30} />
          </Item>
        ))}
      </Options>
    </Container>
  );
};

export default Favorites;
