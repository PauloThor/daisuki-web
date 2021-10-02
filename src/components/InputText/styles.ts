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
  margin: 1rem auto;
  width: 100%;
  padding: 0 0.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  border-radius: 8px;
  border: 1px solid ${Color.MAIN_DARK};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  margin: 0.5rem 0;

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
  font-family: ${Font.MAIN};
  font-size: 14px;

  padding: 0.5rem 1rem;
  border: none;

  &::placeholder {
    color: ${Color.TEXT_MAIN};
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const InputLabel = styled.label<InputWrapperProps>`
  width: 100%;
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
