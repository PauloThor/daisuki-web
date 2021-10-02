import { Color } from "./../../model/enums/theme-colors";
import styled from "styled-components";
import { Menu } from "antd";

export const MenuContainer = styled.div``;

export const MenuStyles = {
  backgroundColor: Color.MAIN,
};

export const StyledMenuSubItem = styled(Menu.Item)`
  background-color: ${Color.MAIN};
  color: ${Color.TEXT_MAIN};

  &:hover {
    background-color: ${Color.MAIN_LIGHT};
  }
`;

export const MenuItem = styled.a`
  color: ${Color.TEXT_MAIN};

  &:hover {
    color: ${Color.TEXT_SECONDARY};
  }
`;
