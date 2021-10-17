import { useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { Label, Input } from "./styles";

interface Props {
  name: string;
  onChange: (e: FileList) => void;
}

const SliceFilename = (filename: string) => {
  const splitFile = filename.split(".");
  const len = splitFile.length;
  const extension = splitFile[len - 1];

  return `${splitFile[0].split("").slice(0, 25).join("")}...${extension}`;
};

const InputFile = ({ name, onChange }: Props) => {
  const [fileName, setFileName] = useState<string | undefined>(undefined);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files;
    onChange(file);

    let filename = file[0].name;
    if (filename.split(".")[0].length > 24) {
      filename = SliceFilename(filename);
    }

    setFileName(filename);
  };

  return (
    <>
      <Label htmlFor={`image-${name}`}>
        <RiImageAddLine /> {fileName ?? "Escolha uma imagem"}
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
