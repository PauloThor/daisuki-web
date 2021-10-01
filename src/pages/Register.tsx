import InputText from "../components/InputText";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputTypes } from "../model/enums/input-types";
import SchemaUtils from "../shared/util/schema-utils";
import { Container, Link, Subtitle } from "./styles";

const Register = () => {
  const methods = useForm({
    resolver: yupResolver(SchemaUtils.register()),
    mode: "all",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Container>
            <InputText
              name="username"
              placeholder="Nome de Usuário"
              label="Usuário*"
              type={InputTypes.USER}
            />
            <InputText
              name="email"
              placeholder="exemplo@mail.com"
              label="E-mail*"
              type={InputTypes.EMAIL}
            />
            <InputText
              name="emailConfirm"
              placeholder="exemplo@mail.com"
              label="Confirme o e-mail*"
              type={InputTypes.EMAIL}
            />
            <InputText
              name="password"
              placeholder="Senha"
              label="Senha*"
              type={InputTypes.PASSWORD}
            />
            <InputText
              name="passwordConfirm"
              placeholder="Senha"
              label="Confirme a senha*"
              type={InputTypes.PASSWORD}
            />
            <button type="submit">aaa</button>
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
