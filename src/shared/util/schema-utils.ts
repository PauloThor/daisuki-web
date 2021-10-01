import * as yup from "yup";

class SchemaUtils {
  static register() {
    return yup.object({
      username: yup
        .string()
        .min(5, "Mínimo de 5 caracteres")
        .required("Campo obrigatório"),
      email: yup
        .string()
        .email("Precisa ser um email válido")
        .required("Campo obrigatório"),
      emailConfirm: yup
        .string()
        .email()
        .required("Campo obrigatório")
        .oneOf([yup.ref("email")], "Os emails devem ser iguais"),
      password: yup.string().min(8, "Mínimo de 8 caracteres"),
      passwordConfirm: yup
        .string()
        .min(8, "Mínimo de 8 caracteres")
        .required("Campo obrigatório")
        .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    });
  }
}

export default SchemaUtils;
