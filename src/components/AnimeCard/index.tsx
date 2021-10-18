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
  const { name, imageUrl, rating } = anime;
  return (
    <Container to={`/animes/${StringUtils.urlMask(name)}`}>
      <img src={imageUrl} alt={`${name}`} />
      <Caption>{`${name}`}</Caption>
      {rank && <Rank>{rank}</Rank>}
      {showRating && (
        <Rating>
          {rating ? rating?.toFixed(2) : "N/A"} <AiFillStar />
        </Rating>
      )}
    </Container>
  );
};

export default AnimeCard;
