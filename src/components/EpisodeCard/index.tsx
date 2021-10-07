import { Container, StyledLink, ReleaseInfo } from "./styles";
import { Episode } from "../../model/episode";
import StringUtils from "../../shared/util/string-utils";
import DateUtils from "../../shared/util/date-utils";

interface Props {
  episode: Episode;
}

const EpisodeCard = ({ episode }: Props) => {
  const { image_url, episode_number, created_at, anime } = episode;

  return (
    <Container>
      <StyledLink to={`/${StringUtils.urlMask(anime?.name)}/${episode_number}`}>
        <img
          src={image_url}
          alt={`${anime?.name}${
            !anime?.is_movie && `episódio ${episode_number}`
          }`}
        />
        <div>
          {anime?.is_movie
            ? `${anime?.name}`
            : `${anime?.name} - Episódio ${episode_number}`}
        </div>
      </StyledLink>
      <ReleaseInfo>
        <span>{DateUtils.timeFromNow(created_at)}</span>
      </ReleaseInfo>
    </Container>
  );
};

export default EpisodeCard;
