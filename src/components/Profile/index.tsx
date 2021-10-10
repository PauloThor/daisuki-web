import DefaultAvatar from "../../assets/img/default-user-avatar.png";
import { useUser } from "../../hooks/User";
import { AvatarContainer, Banner, Container, Options } from "./styles";

const Profile = () => {
  const { user } = useUser();
  return (
    <Container>
      <Banner></Banner>
      <AvatarContainer>
        <img alt="avatar" src={DefaultAvatar} />
        <p>{user?.username ?? "Umaru-chan"}</p>
      </AvatarContainer>
      <Options>
        <p>Editar nome de usuário</p>
        <p>Alterar foto de perfil</p>
        <p>Mudar endereço de e-mail</p>
        <p>Alterar senha</p>
        <p>Excluir conta</p>
      </Options>
    </Container>
  );
};

export default Profile;
