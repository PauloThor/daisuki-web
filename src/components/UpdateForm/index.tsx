import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./styles";
import InputText from "../InputText";
import SchemaUtils from "../../shared/util/schema-utils";
import Button from "../Button";
import { useUser } from "../../hooks/User";
import { FormProps } from "../../model/form";
import { UpdateTypes } from "../../model/enums/update-form-types";
import { IdentityInfo } from "../../model/user";

interface PasswordFormInput {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface UpdateFormProps {
  handleOpenForm: () => void;
  list: FormProps[];
  type: UpdateTypes.USERNAME | UpdateTypes.PASSWORD | UpdateTypes.EMAIL;
}

const UpdateForm = ({ handleOpenForm, list, type }: UpdateFormProps) => {
  const { updatePassword, updateUser } = useUser();

  const methods = useForm({
    resolver: yupResolver(
      type === UpdateTypes.PASSWORD
        ? SchemaUtils.updatePassword()
        : type === UpdateTypes.EMAIL
        ? SchemaUtils.updateEmail()
        : SchemaUtils.updateUsername()
    ),
    mode: "all",
  });

  const submitPassword = (data: PasswordFormInput) => {
    const output = {
      password: data.currentPassword,
      newPassword: data.newPassword,
    };
    updatePassword(output, handleOpenForm);
  };

  const submitUser = (data: IdentityInfo) => {
    updateUser(data, handleOpenForm);
  };

  const onSubmit = (data: PasswordFormInput & IdentityInfo) => {
    const submitOptions = {
      [UpdateTypes.PASSWORD]: () => submitPassword(data),
      [UpdateTypes.USERNAME]: () => submitUser(data),
      [UpdateTypes.EMAIL]: () => submitUser(data),
    };
    submitOptions[type]();
    methods.reset();
  };

  return (
    <div>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          {list.map((input, index) => (
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
