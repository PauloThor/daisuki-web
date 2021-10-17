import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";

export const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  svg {
    color: ${Color.HIGHLIGHT};
  }
`;
