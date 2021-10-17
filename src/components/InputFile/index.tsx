import { useFormContext } from "react-hook-form";
import { RiImageAddLine } from "react-icons/ri";
import { Label, Input } from "./styles";

interface Props {
  name: string;
  onChange: (e: any) => void;
}

const InputFile = ({ name, onChange }: Props) => {
  const { register } = useFormContext();

  const onUpload = (e: any) => {
    if (!e.target.files) {
      return;
    }
    onChange(e.target.files);
  };

  return (
    <>
      <Label htmlFor={`image-${name}`}>
        <RiImageAddLine /> Escolha uma imagem
      </Label>
      <Input
        {...register(name)}
        type="file"
        id={`image-${name}`}
        accept="image/png, image/jpeg"
        onChange={(e) => onUpload(e)}
      />
    </>
  );
};

export default InputFile;
