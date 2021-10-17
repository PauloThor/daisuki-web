import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { RiImageAddLine } from "react-icons/ri";
import { Label, Input } from "./styles";

interface Props {
  name: string;
  onChange: (e: any) => void;
}

const SliceFilename = (file: string) => {
  const splitFile = file.split(".");
  const len = splitFile.length;
  const extension = splitFile[len - 1];

  return `${splitFile[0].split("").slice(0, 25).join("")}...${extension}`;
};

const InputFile = ({ name, onChange }: Props) => {
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const { register } = useFormContext();

  const onUpload = (e: any) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files;
    onChange(file);

    let newFile = file[0].name;
    if (newFile.split(".")[0].length > 24) {
      newFile = SliceFilename(newFile);
    }

    setFileName(newFile);
  };

  return (
    <>
      <Label htmlFor={`image-${name}`}>
        <RiImageAddLine /> {fileName ?? "Escolha uma imagem"}
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
