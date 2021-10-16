import { Container, StyledLink, ReleaseInfo } from "./styles";
import { Episode } from "../../model/episode";
import StringUtils from "../../shared/util/string-utils";
import DateUtils from "../../shared/util/date-utils";

interface Props {
  episode: Episode;
}

const EpisodeCard = ({ episode }: Props) => {
  const { imageUrl, episode_number, createdAt, anime } = episode;

  return (
    <Container>
      <StyledLink to={`/${StringUtils.urlMask(anime?.name)}/${episode_number}`}>
        <img
          src={imageUrl}
          alt={`${anime?.name}${
            !anime?.isMovie && `episódio ${episode_number}`
          }`}
        />
        <div>
          {anime?.isMovie
            ? `${anime?.name}`
            : `${anime?.name} - Episódio ${episode_number}`}
        </div>
      </StyledLink>
      <ReleaseInfo>
        <span>{DateUtils.timeFromNow(createdAt)}</span>
      </ReleaseInfo>
    </Container>
  );
};

export default EpisodeCard;
