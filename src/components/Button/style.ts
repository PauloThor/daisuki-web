import styled from "styled-components";
import { Color } from "./../../model/enums/theme-colors";

interface ButtonProps {
  color?: string;
  margin?: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
  height: 48px;
  width: 166px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${({ color }) => (color ? color : Color.HIGHLIGHT_DARK)};
  margin: ${({ margin }) => margin && margin};
  outline: none;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: 0.3s;

  &:hover,
  &:focus {
    background-color: ${Color.HIGHLIGHT};
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
