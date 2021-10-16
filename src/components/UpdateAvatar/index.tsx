import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { useUser } from "../../hooks/User";
import { useState } from "react";
import * as yup from "yup";
import InputFile from "../InputFile";
import { StyledForm } from "./styles";
import { AvatarInfo } from "../../model/user";
import DefaultAvatar from "../../assets/img/default-user-avatar.png";

interface UpdateAvatarProps {
  handleOpenForm: () => void;
}

const UpdateAvatar = ({ handleOpenForm }: UpdateAvatarProps) => {
  const [avatar, setAvatar] = useState<FileList>();
  const { updateAvatar, user } = useUser();

  const schema = yup.object({
    image: yup
      .string()
      .transform(() => avatar)
      .required(),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = (data: AvatarInfo) => {
    updateAvatar(data, handleOpenForm);
    methods.reset();
  };

  const onUpload = (file: any) => {
    setAvatar(file[0]);
  };

  return (
    <div>
      <img alt="avatar" src={user?.avatarUrl ?? DefaultAvatar} />
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
          <InputFile name="image" onChange={onUpload} />
          <Button text="Enviar" />
        </StyledForm>
      </FormProvider>
    </div>
  );
};

export default UpdateAvatar;
