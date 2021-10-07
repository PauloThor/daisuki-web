import { Container, StyledLink } from "./styles";
import { Episode } from "../../model/episode";

const EpisodeCard = (episode: Episode) => {
  const { image_url, episode_number, created_at, anime } = episode;

  return (
    <Container>
      <StyledLink to={`/${anime?.name}/${episode_number}`}>
        <img
          src={image_url}
          alt={`${anime?.name}${!anime?.is_movie && `episódio ${episode_number}`}`}
        />
        <div>{`${anime?.name}${!anime?.is_movie && ` - Episódio ${episode_number}`}`}</div>
      </StyledLink>
    </Container>
  );
};

export default EpisodeCard;
