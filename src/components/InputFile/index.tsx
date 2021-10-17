import { RiImageAddLine } from "react-icons/ri";
import { Label, Input } from "./styles";

interface Props {
  name: string;
  onChange: (e: FileList) => void;
}

const InputFile = ({ name, onChange }: Props) => {
  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        type="file"
        id={`image-${name}`}
        accept="image/png, image/jpeg"
        onChange={(e) => onUpload(e)}
      />
    </>
  );
};

export default InputFile;
