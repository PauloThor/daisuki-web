import { Container, StyledLink, ReleaseInfo } from "./styles";
import { Episode } from "../../model/episode";
import StringUtils from "../../shared/util/string-utils";
import DateUtils from "../../shared/util/date-utils";

interface Props {
  episode: Episode;
}

const EpisodeCard = ({ episode }: Props) => {
  const { imageUrl, episodeNumber, createdAt, anime } = episode;

  return (
    <Container>
      <StyledLink
        to={`/animes/${StringUtils.urlMask(anime?.name)}/${episodeNumber}`}
      >
        <img
          src={imageUrl}
          alt={`${anime?.name}${
            !anime?.isMovie && `episódio ${episodeNumber}`
          }`}
        />
        <div>
          {anime?.isMovie
            ? `${anime?.name}`
            : `${anime?.name} - Episódio ${episodeNumber}`}
        </div>
      </StyledLink>
      <ReleaseInfo>
        <span>{DateUtils.timeFromNow(createdAt)}</span>
      </ReleaseInfo>
    </Container>
  );
};

export default EpisodeCard;
