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
import FormUtils from "../../shared/util/form-utils";
import { UpdateTypes } from "../../model/enums/update-form-types";

interface ProfileProps {
  onClose: () => void;
}

const Profile = ({ onClose }: ProfileProps) => {
  const [passwordOpen, setPasswordOpen] = useState<boolean>(false);
  const [usernameOpen, setUsernameOpen] = useState<boolean>(false);

  const handleOpenPassword = () => setPasswordOpen(!passwordOpen);
  const handleOpenUsername = () => setUsernameOpen(!usernameOpen);

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
        <p onClick={handleOpenUsername}>Editar nome de usuário</p>
        <p>Alterar foto de perfil</p>
        <p>Mudar endereço de e-mail</p>
        <p onClick={handleOpenPassword}>Alterar senha</p>
        <p>Excluir conta</p>
      </Options>
      <StyledModal visible={passwordOpen} onCancel={handleOpenPassword}>
        <UpdateForm
          handleOpenForm={handleOpenPassword}
          list={FormUtils.password}
          type={UpdateTypes.PASSWORD}
        />
      </StyledModal>
      <StyledModal visible={usernameOpen} onCancel={handleOpenUsername}>
        <UpdateForm
          handleOpenForm={handleOpenUsername}
          list={FormUtils.username(user?.username ?? "")}
          type={UpdateTypes.USERNAME}
        />
      </StyledModal>
    </Container>
  );
};

export default Profile;
