import styled from "styled-components";
import { Font } from "./../../model/enums/theme-fonts";
import { Color } from "./../../model/enums/theme-colors";

interface ButtonProps {
  color?: string;
  margin?: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
  cursor: pointer;
  height: 48px;
  width: 166px;
  font-size: 18px;
  font-weight: bold;
  font-family: ${Font.MAIN};
  color: ${Color.TEXT_MAIN};
  background-color: ${({ color }) => (color ? color : Color.HIGHLIGHT_DARK)};
  margin: ${({ margin }) => margin && margin};
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    background-color: ${Color.HIGHLIGHT};
  }
`;
