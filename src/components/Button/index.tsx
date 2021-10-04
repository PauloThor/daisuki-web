import { ButtonStyle } from "./style";

interface ButtonProps {
  text: string;
  color?: string;
  margin?: string;
  type?: "submit" | "button" | "reset";
  handleClick?: () => void;
}

const Button = ({
  text,
  color,
  margin,
  type = "submit",
  handleClick,
}: ButtonProps) => {
  return (
    <ButtonStyle
      type={!handleClick ? "submit" : type}
      onClick={handleClick}
      color={color}
      margin={margin}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
