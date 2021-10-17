import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Redirect, useHistory } from "react-router-dom";
import { InputTypes } from "../../model/enums/input-types";
import SchemaUtils from "../../shared/util/schema-utils";
import InputText from "../../components/InputText";
import {
  CheckboxContainer,
  Container,
  Form,
  FormContainer,
  FullContainer,
  LogoContainer,
  LottieContainer,
  StyledLink,
  Subtitle,
} from "./styles";
import Lottie from "react-lottie";
import sailormoon from "../../assets/lottie/sailor-moon.json";
import Logo from "../../assets/img/logo.svg";
import Button from "../../components/Button";
import { useUser } from "../../hooks/User";
import { useState } from "react";
import { CheckboxStyled } from "../Admin/styles";

interface FormInput {
  email: string;
  password: string;
}

const Login = () => {
  const [shouldRemember, setShouldRemember] = useState<boolean>(false);
  const { login, token } = useUser();
  const history = useHistory();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sailormoon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

  if (!!token) {
    return <Redirect to="/" />;
  }

  return (
    <FullContainer>
      <LogoContainer>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </LogoContainer>
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
              <Button text="Enviar" margin="8px 0" />
              <Subtitle>
                <StyledLink to="/recover-password">
                  Esqueceu a senha?
                </StyledLink>
              </Subtitle>
              <Subtitle>
                Não é cadastrado?
                <StyledLink to="/register"> Criar conta.</StyledLink>
              </Subtitle>
            </Form>
          </FormProvider>
        </FormContainer>
        <LottieContainer>
          <Lottie options={defaultOptions} />
        </LottieContainer>
      </Container>
    </FullContainer>
  );
};

export default Login;
