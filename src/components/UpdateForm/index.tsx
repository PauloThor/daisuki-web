import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputTypes } from "../../model/enums/input-types";
import { Form } from "./styles";
import InputText from "../InputText";
import SchemaUtils from "../../shared/util/schema-utils";
import Button from "../Button";
import { useUser } from "../../hooks/User";

interface FormInput {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface UpdateFormProps {
  handleOpenForm: () => void;
}

const UpdateForm = ({ handleOpenForm }: UpdateFormProps) => {
  const { updatePassword } = useUser();

  const methods = useForm({
    resolver: yupResolver(SchemaUtils.updatePassword()),
    mode: "all",
  });

  const onSubmit = (data: FormInput) => {
    const output = {
      password: data.currentPassword,
      newPassword: data.newPassword,
    };
    updatePassword(output, handleOpenForm);
    methods.reset();
  };

  const inputList = [
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

  return (
    <div>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          {inputList.map((input, index) => (
            <InputText
              key={`${input.name}-${index}`}
              name={input.name}
              placeholder={input.placeholder}
              label={input.label}
              type={input?.type ?? ""}
              autofocus={index === 0}
            />
          ))}
          <Button text="Enviar" />
        </Form>
      </FormProvider>
    </div>
  );
};

export default UpdateForm;
