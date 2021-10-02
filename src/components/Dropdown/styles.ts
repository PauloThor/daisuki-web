import { Color } from "./../../model/enums/theme-colors";
import styled from "styled-components";
import { Menu } from "antd";

export const MenuContainer = styled.div`
  padding: 10px;
`;

export const MenuStyles = {
  backgroundColor: Color.MAIN,
  borderRadius: "8px",
};

export const StyledMenuSubItem = styled(Menu.Item)`
  background-color: ${Color.MAIN};
  color: ${Color.TEXT_MAIN};

  &:hover {
    background-color: ${Color.MAIN_LIGHT};
    color: ${Color.HIGHLIGHT_DARK};
  }
`;

export const MenuItem = styled.a`
  color: ${Color.TEXT_MAIN};

  &:hover {
    color: ${Color.TEXT_SECONDARY};
  }
`;

export const MenuLabel = styled.label`
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${Color.HIGHLIGHT_DARK};
  }
`;
