import { Helmet } from "react-helmet-async";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Redirect, useHistory } from "react-router-dom";
import { InputTypes } from "../../model/enums/input-types";
import SchemaUtils from "../../shared/util/schema-utils";
import Motion from "../../components/Motion";
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
  StyledButton,
  Subtitle,
  StyledModal,
} from "./styles";
import toast from "react-hot-toast";
import Lottie from "react-lottie";
import sailormoon from "../../assets/lottie/sailor-moon.json";
import Logo from "../../assets/img/logo.svg";
import Button from "../../components/Button";
import { useUser } from "../../hooks/User";
import { useState } from "react";
import { CheckboxStyled } from "../Admin/styles";
import { daisukiApi } from "../../services/api";

interface FormInput {
  email: string;
  password: string;
}

interface FormPasswordRecovery {
  email: string;
}

const Login = () => {
  const [shouldRemember, setShouldRemember] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
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

  const sendEmailMethods = useForm({
    resolver: yupResolver(SchemaUtils.sendTokenEmail()),
    mode: "all",
  });

  const onSubmit = (data: FormInput) => {
    login({ ...data, remindMe: shouldRemember }, history, true);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    sendEmailMethods.reset();
  };

  const handleSubmitEmail = (data: FormPasswordRecovery) => {
    const postData = async () => {
      await daisukiApi.post("/users/temp-token", data);
      handleCancel();
    };
    const myPromise = postData();
    toast.promise(
      myPromise,
      {
        loading: "Enviando...",
        success: "Confira a caixa de entrada do seu e-mail!",
        error: "E-mail não cadastrado!",
      },
      {
        success: {
          duration: 10000,
          style: {
            fontSize: "1.2rem",
            padding: "8px",
          },
          icon: "📨",
        },
      }
    );
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
    <>
      <Helmet>
        <title>Anime Daisuki! | Entrar</title>
      </Helmet>
      <Motion>
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
                    <StyledButton type="button" onClick={showModal}>
                      Esqueceu a senha?
                    </StyledButton>
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
        <StyledModal
          title="Insira o e-mail cadastrado"
          visible={visible}
          onCancel={handleCancel}
        >
          <FormProvider {...sendEmailMethods}>
            <form onSubmit={sendEmailMethods.handleSubmit(handleSubmitEmail)}>
              <InputText
                type={InputTypes.EMAIL}
                name="email"
                label="E-mail*"
                placeholder="exemplo@mail.com"
              />
              <Button text="Enviar" margin="8px 0 0" />
            </form>
          </FormProvider>
        </StyledModal>
      </Motion>
    </>
  );
};

export default Login;
