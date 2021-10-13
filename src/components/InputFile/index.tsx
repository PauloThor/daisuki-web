import { RiImageAddLine } from "react-icons/ri";
import { Label, Input } from "./styles";

const InputFile = () => {
  return (
    <>
      <Label htmlFor="image">
        <RiImageAddLine /> Escolha uma imagem
      </Label>
      <Input
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
        required
      />
    </>
  );
};

export default InputFile;
