import * as yup from "yup";

class SchemaUtils {
  static register() {
    return yup.object({
      username: yup
        .string()
        .min(5, " - Mínimo de 5 caracteres")
        .required(" - Campo obrigatório"),
      email: yup
        .string()
        .email(" - Precisa ser um email")
        .required(" - Campo obrigatório"),
      emailConfirm: yup
        .string()
        .email("")
        .required("")
        .oneOf([yup.ref("email")], ""),
      password: yup.string().min(8, " - Mínimo de 8 caracteres"),
      passwordConfirm: yup
        .string()
        .min(8, "")
        .required("")
        .oneOf([yup.ref("password")], ""),
    });
  }

  static login() {
    return yup.object({
      email: yup
        .string()
        .email(" - Precisa ser um email")
        .required(" - Campo obrigatório"),
      password: yup.string().min(8, " - Mínimo de 8 caracteres"),
    });
  }
}

export default SchemaUtils;
