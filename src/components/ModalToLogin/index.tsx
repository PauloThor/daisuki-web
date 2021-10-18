import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useUser } from "../../hooks/User";
import { InputTypes } from "../../model/enums/input-types";
import { CheckboxStyled } from "../../pages/Admin/styles";
import SchemaUtils from "../../shared/util/schema-utils";
import Button from "../Button";
import InputText from "../InputText";
import {
  CheckboxContainer,
  Container,
  ContainerButtons,
  Content,
  Form,
  FormContainer,
  StyledLink,
  StyledModal,
  Subtitle,
} from "./styles";

interface ModalToLoginProps {
  isModalToLoginVisible: boolean;
  handleModalToLogin: () => void;
}

interface FormInput {
  email: string;
  password: string;
}

export const ModalToLogin = ({
  isModalToLoginVisible,
  handleModalToLogin,
}: ModalToLoginProps) => {
  const history = useHistory();
  const [shouldRemember, setShouldRemember] = useState<boolean>(false);
  const { login } = useUser();

  const handleRemember = () => setShouldRemember(!shouldRemember);

  const methods = useForm({
    resolver: yupResolver(SchemaUtils.login()),
    mode: "all",
  });

  const onSubmit = (data: FormInput) => {
    login({ ...data, remindMe: shouldRemember }, history);
  };

  const inputList = [
    {
      name: "email",
      placeholder: "exemplo@mail.com",
      label: "E-mail*",
      type: InputTypes.EMAIL,
    },
    {
      name: "password",
      placeholder: "Senha",
      label: "Senha*",
      type: InputTypes.PASSWORD,
    },
  ];

  return (
    <StyledModal
      title="Login"
      visible={isModalToLoginVisible}
      onCancel={handleModalToLogin}
    >
      <Content>
        <Container>
          <FormContainer>
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(onSubmit)}>
                {inputList.map((input, index) => (
                  <InputText
                    key={`${input.name}-${index}`}
                    name={input.name}
                    placeholder={input.placeholder}
                    label={input.label}
                    type={input?.type ?? ""}
                    autofocus={index === 0}
                  />
                ))}
                <CheckboxContainer>
                  <CheckboxStyled
                    onChange={handleRemember}
                    checked={shouldRemember}
                  >
                    Lembrar de mim
                  </CheckboxStyled>
                </CheckboxContainer>
                <ContainerButtons>
                  <Button
                    text="Cancelar"
                    margin="0px"
                    handleClick={handleModalToLogin}
                  />
                  <Button text="Fazer login" margin="0px" type="submit" />
                </ContainerButtons>

                <Subtitle>
                  Não é cadastrado?
                  <StyledLink to="/register"> Criar conta.</StyledLink>
                </Subtitle>
              </Form>
            </FormProvider>
          </FormContainer>
        </Container>
      </Content>
    </StyledModal>
  );
};
