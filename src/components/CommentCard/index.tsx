import {
  Container,
  Content,
  ProfilePicture,
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
  handleDelete: () => void;
  visible?: boolean;
}

const CommentCard = ({
  image,
  name,
  created_at,
  content,
  handleDelete,
  visible = false,
}: CommentProps) => {
  return (
    <Container>
      <ProfilePicture src={image} alt={`${name} avatar`} />
      <Content visible={visible}>
        <UserName>{name}</UserName>
        <TimeLapsed>• {DateUtils.timeFromNow(created_at)}</TimeLapsed>
        {visible && <OptionsMenu handleDelete={handleDelete} />}
        <Comment>{content}</Comment>
      </Content>
    </Container>
  );
};

export default CommentCard;
