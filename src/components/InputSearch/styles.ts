import styled from "styled-components";
import {
  Input,
  InputContainer,
  InputLabel,
  InputWrapper,
} from "../InputText/styles";

interface InputWrapperProps {
  isFocused?: boolean;
  isValid?: boolean;
  hasError?: boolean;
  hasValue?: boolean;
  maxWidth?: string;
}

export const SearchContainer = styled(InputContainer)``;

export const SearchWrapper = styled(InputWrapper)<InputWrapperProps>``;

export const SearchInput = styled(Input)``;

export const SearchLabel = styled(InputLabel)<InputWrapperProps>``;
