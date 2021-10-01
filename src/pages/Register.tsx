import InputText from "../components/InputText";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Color } from "../model/enums/theme-colors";
import { InputTypes } from "../model/enums/input-types";
import SchemaUtils from "../shared/util/schema-utils";

const Register = () => {
  const methods = useForm({
    resolver: yupResolver(SchemaUtils.register()),
    mode: "all",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div style={{ backgroundColor: Color.MAIN, padding: "10px" }}>
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
        </div>
        <button type="submit">aaa</button>
      </form>
    </FormProvider>
  );
};

export default Register;
