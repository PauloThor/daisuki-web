import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { useUser } from "../../hooks/User";
import { useState } from "react";
import * as yup from "yup";
import InputFile from "../InputFile";
import { ImageContainer, StyledForm } from "./styles";
import DefaultAvatar from "../../assets/img/default-user-avatar.png";

interface UpdateAvatarProps {
  handleOpenForm: () => void;
}

const UpdateAvatar = ({ handleOpenForm }: UpdateAvatarProps) => {
  const [avatar, setAvatar] = useState<File>();
  const { updateAvatar, user } = useUser();

  const schema = yup.object({});

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = () => {
    updateAvatar(avatar, handleOpenForm);
  };

  const onUpload = (file: any) => {
    setAvatar(file[0]);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
          <ImageContainer>
            <img alt="avatar" src={user?.avatarUrl ?? DefaultAvatar} />
          </ImageContainer>
          <InputFile name="image" onChange={onUpload} />
          <Button text="Enviar" />
        </StyledForm>
      </FormProvider>
    </div>
  );
};

export default UpdateAvatar;
