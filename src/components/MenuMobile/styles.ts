import { Color } from "./../../model/enums/theme-colors";
import { Menu } from "antd";
import styled from "styled-components";
import { isBlock } from "typescript";

const { SubMenu } = Menu;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuStyles = {
  backgroundColor: Color.MAIN_LIGHT,
  borderRadius: "5px",
};

export const StyledSubMenu = styled(SubMenu)`
  background-color: ${Color.MAIN_LIGHT};

  .ant-dropdown-menu {
    background-color: ${Color.MAIN_LIGHT};
  }

  span {
    color: ${Color.TEXT_MAIN};
  }

  .bMVwfA span {
    color: ${Color.TEXT_MAIN};
  }

  .ant-dropdown-menu-item:hover,
  .ant-dropdown-menu-submenu-title:hover {
    background-color: ${Color.MAIN_LIGHT};
  }

  .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-expand-icon {
    display: none;
  }
`;

export const StyledItem = styled(Menu.Item)`
  background-color: ${Color.MAIN_LIGHT};
  color: ${Color.TEXT_MAIN};
`;

export const MobileMenu = styled(Menu)`
  position: absolute;
  width: 100%;
  z-index: 2;
  top: 0;
  left: 0;
`;
