import { InputTypes } from "../../model/enums/input-types";

class FormUtils {
  static password = [
    {
      name: "currentPassword",
      placeholder: "Senha",
      label: "Senha atual*",
      type: InputTypes.PASSWORD,
    },
    {
      name: "newPassword",
      placeholder: "Senha",
      label: "Nova senha*",
      type: InputTypes.PASSWORD,
    },
    {
      name: "confirmPassword",
      placeholder: "Senha",
      label: "Confirme a nova senha*",
      type: InputTypes.PASSWORD,
    },
  ];

  static username = (placeholder: string) => [
    {
      name: "username",
      placeholder,
      label: "Novo nome de usuário*",
      type: InputTypes.USER,
    },
  ];

  static email = (placeholder: string) => [
    {
      name: "email",
      placeholder,
      label: "Novo endereço de e-mail*",
      type: InputTypes.EMAIL,
    },
  ];

  static passwordRecovery = [
    {
      name: "email",
      placeholder: "exemplo@mail.com",
      label: "E-mail*",
      type: InputTypes.EMAIL,
    },
    {
      name: "password",
      placeholder: "Senha",
      label: "Nova senha*",
      type: InputTypes.PASSWORD,
    },
    {
      name: "confirmPassword",
      placeholder: "Senha",
      label: "Confirme a nova senha*",
      type: InputTypes.PASSWORD,
    },
  ]
}

export default FormUtils;
