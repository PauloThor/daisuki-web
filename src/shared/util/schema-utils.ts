import * as yup from "yup";

const URL =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

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
      sinopse: yup
        .string()
        .min(20, " - Mínimo de 20 caracteres")
        .required(" - campo obrigatório"),
      movie: yup.boolean(),
      totalepisodes: yup
        .number()
        .integer("Insira um valor inteiro")
        .required(" - Campo obrigatório"),
      dubbed: yup.boolean(),
      image: yup.mixed().transform((value) => value[0]),
    });
  }

  static episode() {
    return yup.object({
      anime: yup.string().required(" - Selecione um anime"),
      episodenumber: yup
        .number()
        .integer(" - Insira um valor inteiro")
        .required(" - Campo obrigatório"),
      videoUrl: yup.string().matches(URL).required(" - Campo obrigatório"),
      image: yup.mixed().transform((value) => value[0]),
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
}

export default SchemaUtils;
