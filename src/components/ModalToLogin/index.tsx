import { useHistory } from "react-router";
import Button from "../Button";
import { Content, StyledModal } from "./styles";

interface ModalSynopsisProps {
  isModalToLoginVisible: boolean;
  handleModalToLogin: () => void;
}

export const ModalToLogin = ({
  isModalToLoginVisible,
  handleModalToLogin,
}: ModalSynopsisProps) => {
  const history = useHistory();
  const handleToLogin = () => {
    history.push("/login");
  };
  return (
    <StyledModal
      title="Login"
      visible={isModalToLoginVisible}
      onCancel={handleModalToLogin}
    >
      <Content>
        <p>Faça o login para avaliar o anime!</p>
        <div>
          <Button
            text="Cancelar"
            margin="0px"
            handleClick={handleModalToLogin}
          />
          <Button text="Fazer login" margin="0px" handleClick={handleToLogin} />
        </div>
      </Content>
    </StyledModal>
  );
};
