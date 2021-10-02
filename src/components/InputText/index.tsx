import { useFormContext } from "react-hook-form";

interface InputTextProps {
  name: string;
  placeholder: string;
  handleOnChange?: (e: any) => void;
}

const InputText = ({ name }: InputTextProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <input {...register(name)} />
    </div>
  );
};

export default InputText;
