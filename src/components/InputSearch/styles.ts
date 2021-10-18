import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";
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

export const SearchContainer = styled(InputContainer)`
  position: relative;
`;

export const SearchWrapper = styled(InputWrapper)<InputWrapperProps>``;

export const SearchInput = styled(Input)``;

export const SearchLabel = styled(InputLabel)<InputWrapperProps>``;

export const AnimeContainer = styled.div`
  position: absolute;
  z-index: 1005;
  background-color: ${Color.MAIN_DARK};
  border-radius: 8px;
  transition: 0.5s;
`;

export const Item = styled.section`
  padding: 0.5rem 0;
  display: flex;
  img {
    width: 30%;
    object-fit: contain;
  }
`;

export const Info = styled.div`
  width: 70%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  max-height: 20%;
  font-size: 90%;
`;

export const InfoList = styled.ul`
  margin-top: auto;
`;

export const InfoItem = styled.li`
  font-size: 0.7rem;
  label:first-child {
    font-weight: 700;
  }
`;
