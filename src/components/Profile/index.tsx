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
import { Pop } from "../Favorites/styles";
import UpdateAvatar from "../UpdateAvatar";
import SpinLoading from "../SpinLoading";

interface ProfileProps {
  onClose: () => void;
}

const Profile = ({ onClose }: ProfileProps) => {
  const [passwordOpen, setPasswordOpen] = useState<boolean>(false);
  const [usernameOpen, setUsernameOpen] = useState<boolean>(false);
  const [emailOpen, setEmailOpen] = useState<boolean>(false);
  const [avatarOpen, setAvatarOpen] = useState<boolean>(false);

  const closeAll = () => {
    setPasswordOpen(false);
    setUsernameOpen(false);
    setEmailOpen(false);
  };

  const handleOpenPassword = () => setPasswordOpen(!passwordOpen);
  const handleOpenUsername = () => setUsernameOpen(!usernameOpen);
  const handleOpenEmail = () => {
    closeAll();
    setEmailOpen(!emailOpen);
  };
  const handleOpenAvatar = () => {
    closeAll();
    setAvatarOpen(!avatarOpen);
  };

  const { user, isLoading, deleteSelf } = useUser();

  const handleDelete = () => {
    deleteSelf();
    onClose();
  };

  return (
    <Container>
      <CloseIcon size={30} onClick={onClose} />
      <Banner>
        <Text>Minha conta</Text>
        <img alt="header" src={BannerImage} />
      </Banner>
      <AvatarContainer>
        {isLoading ? (
          <SpinLoading />
        ) : (
          <img alt="avatar" src={user?.avatarUrl ?? DefaultAvatar} />
        )}
        {isLoading ? <div></div> : <p>{user?.username ?? ""}</p>}
      </AvatarContainer>
      <Options>
        <p onClick={handleOpenUsername}>Editar nome de usuário</p>
        <p onClick={handleOpenAvatar}>Alterar foto de perfil</p>
        <p onClick={handleOpenEmail}>Mudar endereço de e-mail</p>
        <p onClick={handleOpenPassword}>Alterar senha</p>
        <p>
          <Pop
            title="Excluir conta?"
            onConfirm={handleDelete}
            okText="Sim"
            cancelText="Não"
          >
            Excluir conta
          </Pop>
        </p>
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
      <StyledModal visible={emailOpen} onCancel={handleOpenEmail}>
        <UpdateForm
          handleOpenForm={handleOpenEmail}
          list={FormUtils.email(user?.email ?? "")}
          type={UpdateTypes.EMAIL}
        />
      </StyledModal>
      <StyledModal visible={avatarOpen} onCancel={handleOpenAvatar}>
        <UpdateAvatar handleOpenForm={handleOpenAvatar} />
      </StyledModal>
    </Container>
  );
};

export default Profile;
