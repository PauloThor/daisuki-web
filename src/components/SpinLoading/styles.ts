import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";

interface SpinProps {
  size: "small" | "large" | "default";
}

export const SpinContainer = styled.div<SpinProps>`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => (props.size === "large" ? "50px" : "0")};

  svg {
    color: ${Color.HIGHLIGHT};
  }
`;
