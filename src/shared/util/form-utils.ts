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
      type: InputTypes.TEXT,
    },
  ];
}

export default FormUtils;
