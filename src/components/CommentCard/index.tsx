import {
  Container,
  Content,
  ProfilePicture,
  UserName,
  TimeLapsed,
  Comment,
} from "./style";

import OptionsMenu from "./options";

interface CommentProps {
  image?: string;
  name: string;
  date: string;
  comment: string;
  visible?: boolean;
}

const CommentCard = ({
  image,
  name,
  date,
  comment,
  visible = false,
}: CommentProps) => {
  return (
    <Container>
      {image && <ProfilePicture src={image} alt={`${name} profile picture`} />}
      <Content visible={visible}>
        <UserName>{name}</UserName>
        <TimeLapsed>• {date}</TimeLapsed>
        {visible && <OptionsMenu />}
        <Comment>{comment}</Comment>
      </Content>
    </Container>
  );
};

export default CommentCard;
