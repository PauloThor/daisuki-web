import { useState } from "react";
import DefaultAvatar from "../../assets/img/default-user-avatar.png";
import { useUser } from "../../hooks/User";
import UpdateForm from "../UpdateForm";
import {
  AvatarContainer,
  Banner,
  CloseIcon,
  Container,
  Options,
  StyledModal,
  Text,
} from "./styles";
import BannerImage from "../../assets/img/profile-header.png";

interface ProfileProps {
  onClose: () => void;
}

const Profile = ({ onClose }: ProfileProps) => {
  const [formOpen, setFormOpen] = useState<boolean>(false);

  const handleOpenForm = () => setFormOpen(!formOpen);

  const { user } = useUser();

  return (
    <Container>
      <CloseIcon size={30} onClick={onClose} />
      <Banner>
        <Text onClick={() => console.log(user)}>Minha conta</Text>
        <img alt="header" src={BannerImage} />
      </Banner>
      <AvatarContainer>
        <img alt="avatar" src={DefaultAvatar} />
        <p>{user?.username ?? ""}</p>
      </AvatarContainer>
      <Options>
        <p>Editar nome de usuário</p>
        <p>Alterar foto de perfil</p>
        <p>Mudar endereço de e-mail</p>
        <p onClick={handleOpenForm}>Alterar senha</p>
        <p>Excluir conta</p>
      </Options>
      <StyledModal visible={formOpen} onCancel={handleOpenForm}>
        <UpdateForm handleOpenForm={handleOpenForm} />
      </StyledModal>
    </Container>
  );
};

export default Profile;
