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
        <div style={{ backgroundColor: Color.MAIN_LIGHT, padding: "10px" }}>
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
            name="password"
            placeholder="******"
            label="Senha*"
            type={InputTypes.PASSWORD}
          />
          <InputText
            name="passwordConfirm"
            placeholder="******"
            label="Confirmar Senha*"
            type={InputTypes.PASSWORD}
          />
        </div>
        <button type="submit">aaa</button>
      </form>
    </FormProvider>
  );
};

export default Register;
