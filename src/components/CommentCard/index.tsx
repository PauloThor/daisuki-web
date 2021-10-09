import {
  Container,
  Content,
  ProfilePicture,
  DefaultProfilePicture,
  UserName,
  TimeLapsed,
  Comment,
} from "./style";

import OptionsMenu from "./options";
import DateUtils from "../../shared/util/date-utils";

interface CommentProps {
  image?: string;
  name: string;
  created_at: string;
  content: string;
  visible?: boolean;
}

const CommentCard = ({
  image,
  name,
  created_at,
  content,
  visible = false,
}: CommentProps) => {
  return (
    <Container>
      {image ? (
        <ProfilePicture src={image} alt={`${name} profile picture`} />
      ) : (
        <DefaultProfilePicture />
      )}
      <Content visible={visible}>
        <UserName>{name}</UserName>
        <TimeLapsed>• {DateUtils.timeFromNow(created_at)}</TimeLapsed>
        {visible && <OptionsMenu />}
        <Comment>{content}</Comment>
      </Content>
    </Container>
  );
};

export default CommentCard;
