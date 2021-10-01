import { Font } from "./../../model/enums/theme-fonts";
import { Color } from "./../../model/enums/theme-colors";
import styled, { css } from "styled-components";

interface InputWrapperProps {
  isFocused?: boolean;
  isValid?: boolean;
  hasError?: boolean;
  hasValue?: boolean;
}

export const InputContainer = styled.div`
  margin: 1rem 0.5rem;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  border-radius: 8px;
  border: 1px solid ${Color.MAIN_DARK};
  width: 250px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  ${(props) =>
    props.isFocused
      ? css`
          border-color: ${Color.SECONDARY};
        `
      : props.hasError
      ? css`
          border-color: ${Color.HIGHLIGHT_LIGHT};
        `
      : css`
          border-color: ${Color.MAIN_DARK};
        `}
`;

export const Input = styled.input`
  background-color: transparent;
  color: ${Color.TEXT_MAIN};
  font-size: ${Font.MAIN};

  padding: 0.5rem 1rem;
  border: none;

  &::placeholder {
    color: ${Color.TEXT_MAIN};
    opacity: 0.7;
  }
`;

export const InputLabel = styled.p<InputWrapperProps>`
  color: ${Color.TEXT_MAIN};
  padding-bottom: 5px;

  ${(props) =>
    props.hasError
      ? css`
          color: ${Color.HIGHLIGHT};
        `
      : props.isValid
      ? css`
          color: ${Color.TEXT_MAIN};
        `
      : css`
          color: ${Color.TEXT_MAIN};
        `}
`;
