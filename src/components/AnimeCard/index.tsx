import { Container } from "./styles";
import { Anime } from "../../model/anime";
import StringUtils from "../../shared/util/string-utils";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  const { name, image_url } = anime;
  return (
    <Container to={`/${StringUtils.urlMask(name)}`}>
      <img src={image_url} alt={`${name}`} />
      <div>{`${name}`}</div>
    </Container>
  );
};

export default AnimeCard;
