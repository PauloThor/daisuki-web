import InputText from "../../components/InputText";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputTypes } from "../../model/enums/input-types";
import SchemaUtils from "../../shared/util/schema-utils";
import {
  Container,
  FormContainer,
  Link,
  LottieContainer,
  Subtitle,
} from "./styles";
import Lottie from "react-lottie";
import kakashi from "../../assets/lottie/kakashi.json";

interface FormInput {
  username: string;
  email: string;
  emailConfirm: string;
  password: string;
  passwordConfirm: string;
}

const Register = () => {
  const registerOptions = {
    loop: true,
    autoplay: true,
    animationData: kakashi,
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
      name: "username",
      placeholder: "Nome de Usuário",
      label: "Usuário*",
      type: InputTypes.USER,
    },
    {
      name: "email",
      placeholder: "exemplo@mail.com",
      label: "E-mail*",
      type: InputTypes.EMAIL,
    },
    {
      name: "emailConfirm",
      placeholder: "exemplo@mail.com",
      label: "Confirme o e-mail*",
      type: InputTypes.EMAIL,
    },
    {
      name: "password",
      placeholder: "Senha",
      label: "Senha*",
      type: InputTypes.PASSWORD,
    },
    {
      name: "passwordConfirm",
      placeholder: "Senha",
      label: "Confirme a senha*",
      type: InputTypes.PASSWORD,
    },
  ];

  return (
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
              Já é cadastrado? <Link>Acessar conta</Link>.
            </Subtitle>
          </FormContainer>
        </form>
      </FormProvider>
      <LottieContainer>
        <Lottie options={registerOptions} width={500} height={500} />
      </LottieContainer>
    </Container>
  );
};

export default Register;
