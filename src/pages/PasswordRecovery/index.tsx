import { useParams, Redirect, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { PasswordRecoveryParams } from "../../model/param";
import { useUser } from "../../hooks/User";
import { Container, Form, BgLeft, BgRight } from "./styles";
import { daisukiApi } from "../../services/api";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import SchemaUtils from "../../shared/util/schema-utils";
import FormUtils from "../../shared/util/form-utils";

interface FormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const PasswordRecovery = () => {
  const params: PasswordRecoveryParams = useParams();
  const history = useHistory();
  const { token } = useUser();

  const methods = useForm({
    resolver: yupResolver(SchemaUtils.passwordRecovery()),
    mode: "all",
  });

  const onSubmit = (data: FormInput) => {
    const { email, password } = data;
    const postData = async () => {
      await daisukiApi.post(`/users/${params.id}/recovery-password`, {
        email,
        newPassword: password,
        tempToken: params.token,
      });
      methods.reset();
      history.push("/login");
    };

    const myPromise = postData();

    toast.promise(myPromise, {
      loading: "Enviando...",
      success: "Senha alterada com sucesso!",
      error: "Algo deu errado =c",
    });
  };

  if (!!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Helmet>
        <title>Anime Daisuki! | Recuperar senha</title>
      </Helmet>
      <Container>
        <BgLeft />
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            {FormUtils.passwordRecovery.map((field) => (
              <InputText {...field} key={field.name} />
            ))}
            <Button text="Enviar" margin="4px 0 0" />
          </Form>
        </FormProvider>
        <BgRight />
      </Container>
    </>
  );
};

export default PasswordRecovery;
