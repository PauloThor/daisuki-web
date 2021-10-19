import { Link } from "react-router-dom";
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

export const SearchInput = styled(Input)`
  width: 100%;
`;

export const SearchLabel = styled(InputLabel)<InputWrapperProps>``;

export const AnimeContainer = styled.div`
  position: absolute;
  z-index: 1005;
  background-color: ${Color.MAIN_DARK};
  border-radius: 8px;
  transition: 0.5s;
`;

export const Item = styled(Link)`
  padding: 0.5rem 0;
  display: flex;
  color: ${Color.SECONDARY};
  border-bottom: 1px solid ${Color.HIGHLIGHT};
  img {
    width: 30%;
    object-fit: contain;
    margin-left: 5px;
    border-radius: 5px;
  }

  &:hover {
    color: ${Color.HIGHLIGHT_LIGHT};
  }

  width: 100vw;

  @media (min-width: 768px) {
    width: initial;
  }
`;

export const Info = styled.div`
  width: 70%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 0.75rem;
  height: 20%;
  line-height: 20px;
`;

export const InfoList = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: end;
`;

export const InfoItem = styled.li`
  font-size: 0.7rem;
  height: 20px;
  label:first-child {
    font-weight: 700;
  }
`;
