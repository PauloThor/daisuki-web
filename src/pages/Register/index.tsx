import InputText from "../../components/InputText";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputTypes } from "../../model/enums/input-types";
import SchemaUtils from "../../shared/util/schema-utils";
import { Container, Link, Subtitle } from "./styles";

const Register = () => {
  const methods = useForm({
    resolver: yupResolver(SchemaUtils.register()),
    mode: "all",
  });

  const onSubmit = (data: any) => {
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
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Container>
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
          </Container>
        </form>
      </FormProvider>
    </div>
  );
};

export default Register;
