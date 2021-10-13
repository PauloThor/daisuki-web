import { useFormContext } from "react-hook-form";
import { RiImageAddLine } from "react-icons/ri";
import { Label, Input } from "./styles";

interface Props {
  name: string;
}

const InputFile = ({ name }: Props) => {
  const { register } = useFormContext();

  return (
    <>
      <Label htmlFor="image">
        <RiImageAddLine /> Escolha uma imagem
      </Label>
      <Input
        {...register(name)}
        type="file"
        id="image"
        accept="image/png, image/jpeg"
      />
    </>
  );
};

export default InputFile;
