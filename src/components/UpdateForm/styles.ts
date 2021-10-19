import { Color } from "./../../model/enums/theme-colors";
import styled from "styled-components";

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 380px;
  background-color: ${Color.MAIN_LIGHT};
  border-radius: 8px;

  button {
    color: ${Color.TEXT_MAIN};
  }

  @media (min-width: 768px) {
    padding: 12px 24px;
  }
`;
