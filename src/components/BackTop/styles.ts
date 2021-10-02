import styled from "styled-components";
import { BackTop } from "antd";
import { Color } from "../../model/enums/theme-colors";

export const BackTopStyled = styled(BackTop)`
  width: 40px;
  height: 30px;
  color: ${Color.HIGHLIGHT_DARK};
  font-size: 30px;
  border: 1px solid ${Color.HIGHLIGHT_DARK};
  border-radius: 4px;
  text-align: center;
  line-height: 30px;
  box-shadow: 0px 0px 2px 0px rgba(180, 24, 76, 0.4);
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 8px 0px rgba(180, 24, 76, 0.4);
  }
`;
