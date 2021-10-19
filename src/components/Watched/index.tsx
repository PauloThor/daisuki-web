import { Banner, CloseIcon, Container, Text } from "../Profile/styles";
import BannerImage from "../../assets/img/profile-header.png";
import { useUser } from "../../hooks/User";
import SpinLoading from "../SpinLoading";
import { Item, Options } from "../Favorites/styles";
import { EpisodeHistory } from "../../model/episode-history";

interface FavoritesProps {
  list: EpisodeHistory[];
  onClose: () => void;
}

const Watched = ({ onClose, list }: FavoritesProps) => {
  const { isLoading } = useUser();

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
        <Options>
          {list.map((view, index) => (
            <Item key={index}>
              <p>{`${view.anime} - Episódio ${view.episode}`}</p>
            </Item>
          ))}
        </Options>
      )}
    </Container>
  );
};

export default Watched;
