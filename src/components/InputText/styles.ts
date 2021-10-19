import { Font } from "./../../model/enums/theme-fonts";
import { Color } from "./../../model/enums/theme-colors";
import styled, { css } from "styled-components";

interface InputWrapperProps {
  isFocused?: boolean;
  isValid?: boolean;
  hasError?: boolean;
  hasValue?: boolean;
  maxWidth?: string;
}

export const InputContainer = styled.div`
  margin: 0.2rem auto;
  width: 100%;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 768px) {
    margin: 0.5rem auto;
  }
`;

export const InputWrapper = styled.section<InputWrapperProps>`
  border-radius: 8px;
  border: 1px solid ${Color.MAIN_DARK};
  width: 100%;
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

  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `}
`;

export const Input = styled.input`
  background-color: transparent;
  color: ${Color.TEXT_MAIN};
  font-family: ${Font.MAIN};
  padding: 0.5rem 1rem;
  border: none;
  flex-grow: 1;

  &:-webkit-autofill {
    box-shadow: 0 0 0 50px ${Color.MAIN} inset;
    -webkit-box-shadow: 0 0 0 50px ${Color.MAIN} inset;
    -webkit-text-fill-color: ${Color.TEXT_MAIN};
  }

  &::placeholder {
    color: ${Color.TEXT_MAIN};
    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;

    &::placeholder {
      opacity: 0;
    }
  }
`;

export const InputLabel = styled.label<InputWrapperProps>`
  width: 100%;
  color: ${Color.TEXT_MAIN};
  padding-bottom: 2px;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding-bottom: 6px;
  }

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
