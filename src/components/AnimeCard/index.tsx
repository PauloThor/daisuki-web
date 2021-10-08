import { AiFillStar } from "react-icons/ai";
import { Container, Caption, Rank, Rating } from "./styles";
import { Anime } from "../../model/anime";
import StringUtils from "../../shared/util/string-utils";

interface Props {
  anime: Anime;
  rank?: number;
  showRating?: boolean;
}

const AnimeCard = ({ anime, rank, showRating }: Props) => {
  const { name, image_url, rating } = anime;
  return (
    <Container to={`/${StringUtils.urlMask(name)}`}>
      <img src={image_url} alt={`${name}`} />
      <Caption>{`${name}`}</Caption>
      {rank && <Rank>{rank}</Rank>}
      {showRating && (
        <Rating>
          {rating?.toFixed(2)} <AiFillStar />
        </Rating>
      )}
    </Container>
  );
};

export default AnimeCard;
