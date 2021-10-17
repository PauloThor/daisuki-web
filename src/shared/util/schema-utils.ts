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

  static anime() {
    return yup.object({
      name: yup.string().required(" - Campo obrigatório"),
      totalEpisodes: yup.string(),
    });
  }

  static episode() {
    return yup.object({
      episodeNumber: yup
        .number()
        .typeError(" - Insira um número")
        .integer(" - Insira um valor inteiro"),
      videoUrl: yup
        .string()
        .required(" - Campo obrigatório")
        .matches(/^https:\/\/streamable.com\/[a-z0-9]{6}$/, " - Url inválida"),
    });
  }

  static moderator() {
    return yup.object({
      email: yup
        .string()
        .email(" - Precisa ser um email")
        .required(" - Campo obrigatório"),
    });
  }

  static updatePassword() {
    return yup.object({
      currentPassword: yup
        .string()
        .min(8, " - Mínimo de 8 caracteres")
        .required(" - Campo obrigatório"),
      newPassword: yup
        .string()
        .min(8, " - Mínimo de 8 caracteres")
        .required(" - Campo obrigatório"),
      confirmPassword: yup
        .string()
        .min(8, "")
        .required("")
        .oneOf([yup.ref("newPassword")], ""),
    });
  }

  static updateUsername() {
    return yup.object({
      username: yup.string().required(" - Campo obrigatório"),
    });
  }

  static updateEmail() {
    return yup.object({
      email: yup
        .string()
        .email(" - Deve ser um e-mail")
        .required(" - Campo obrigatório"),
    });
  }
}

export default SchemaUtils;
