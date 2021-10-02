import InputText from "../../components/InputText";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputTypes } from "../../model/enums/input-types";
import SchemaUtils from "../../shared/util/schema-utils";
import {
  Container,
  FormContainer,
  FullContainer,
  LogoContainer,
  LottieContainer,
  StyledLink,
  Subtitle,
} from "../Register/styles";
import Lottie from "react-lottie";
import sailormoon from "../../assets/lottie/sailor-moon.json";
import Logo from "../../assets/img/logo.svg";

interface FormInput {
  username: string;
  email: string;
  emailConfirm: string;
  password: string;
  passwordConfirm: string;
}

const Login = () => {
  const loginOptions = {
    loop: true,
    autoplay: true,
    animationData: sailormoon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const methods = useForm({
    resolver: yupResolver(SchemaUtils.register()),
    mode: "all",
  });

  const onSubmit = (data: FormInput) => {
    console.log(data);
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
    <FullContainer>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>
      <Container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormContainer>
              {inputList.map((input, index) => (
                <InputText
                  key={`${input.name}-${index}`}
                  name={input.name}
                  placeholder={input.placeholder}
                  label={input.label}
                  type={input?.type ?? ""}
                />
              ))}
              <button type="submit" style={{ margin: "5px 10px" }}>
                Enviar
              </button>

              <Subtitle>
                <StyledLink to="/recover-password">
                  Esqueceu a senha?
                </StyledLink>
              </Subtitle>
              <Subtitle>
                Não é cadastrado?
                <StyledLink to="/login"> Criar conta.</StyledLink>
              </Subtitle>
            </FormContainer>
          </form>
        </FormProvider>
        <LottieContainer>
          <Lottie options={loginOptions} />
        </LottieContainer>
      </Container>
    </FullContainer>
  );
};

export default Login;
