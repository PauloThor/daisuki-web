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
      animeName: yup.string().required(" - Campo obrigatório"),
      sinopse: yup
        .string()
        .min(20, " - Mínimo de 20 caracteres")
        .required(" - campo obrigatório"),
      isMovie: yup.boolean(),
      episodesNumber: yup
        .number()
        .integer("Insira um valor inteiro")
        .required(" - Campo obrigatório"),
      isDubbed: yup.boolean(),
      image: yup.string().required(" - Campo obrigatório"),
    });
  }

  static episode() {
    return yup.object({
      episodeNumber: yup.string().required(" - Campo obrigatório"),
      // TODO: validar a url do videoUrl
      // .matches(URL)
      // .required(" - Campo obrigatório")
      videoUrl: yup.string().required(" - Campo obrigatório"),
      image: yup.string().required(" - Campo obrigatório"),
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
