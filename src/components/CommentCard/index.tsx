import {
  Container,
  Content,
  ProfilePicture,
  UserName,
  TimeLapsed,
  Text,
} from "./style";
import { Comment } from "../../model/comment";
import OptionsMenu from "./options";
import DateUtils from "../../shared/util/date-utils";
import DefaultAvatar from "../../assets/img/default-user-avatar.png";

interface CommentProps {
  comment: Comment;
  handleDelete: () => void;
  visible?: boolean;
}

const CommentCard = ({
  comment,
  handleDelete,
  visible = false,
}: CommentProps) => {
  return (
    <Container>
      <ProfilePicture
        src={comment.user?.avatarUrl ?? DefaultAvatar}
        alt="Avatar"
      />
      <Content visible={visible}>
        <UserName>{comment.user?.username}</UserName>
        <TimeLapsed>• {DateUtils.timeFromNow(comment?.createdAt)}</TimeLapsed>
        {visible && <OptionsMenu handleDelete={handleDelete} />}
        <Text>{comment?.content}</Text>
      </Content>
    </Container>
  );
};

export default CommentCard;
