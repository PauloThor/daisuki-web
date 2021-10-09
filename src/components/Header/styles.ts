import { Color } from "./../../model/enums/theme-colors";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { GiHamburgerMenu } from "react-icons/gi";

export const Container = styled.header`
  background-color: ${Color.MAIN_LIGHT};
  height: 78px;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: space-between;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.25);

  form {
    display: none;

    @media (min-width: 1024px) {
      display: initial;
    }
  }

  .ant-dropdown-menu {
    background-color: transparent;
  }

  .hamburger-menu {
    color: ${Color.TEXT_MAIN};
    cursor: pointer;

    @media (min-width: 1024px) {
      display: none;
    }

    &:hover,
    &:focus {
      color: ${Color.HIGHLIGHT};
    }
  }

  @media (max-width: 350px) {
    .link-logo {
      padding-right: 10px;
    }

    padding: 15px;
  }
`;

export const ProfileLink = styled(Link)`
  color: ${Color.TEXT_MAIN};
  font-size: 16px;

  &:hover {
    color: ${Color.HIGHLIGHT_DARK};
  }
`;

export const Divider = styled.div`
  height: 30px;
  border-left: 1px solid ${Color.TEXT_MAIN};
  margin: 0 20px 0 24px;
`;

export const HeaderItem = styled.div`
  align-items: center;
  padding: 0 15px;
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const MenuMobileContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (min-width: 1024px) {
    display: none;
  } */
`;

export const MobileMenu = styled(Menu)`
  position: absolute;
  width: 100vw;
  z-index: 2;
  top: 78px;
  left: 0;
  animation: fromTop 0.5s;
  background: ${Color.MAIN_LIGHT};

  ul {
    background: ${Color.MAIN} !important;
  }

  @keyframes fromTop {
    from {
      top: 38px;
      opacity: 0;
    }
  }
  i {
    color: ${Color.TEXT_MAIN};
  }

  .ant-menu-submenu-title:hover {
    color: ${Color.HIGHLIGHT} !important;
  }

  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
    color: ${Color.HIGHLIGHT};
  }

  border-bottom: 1px solid ${Color.HIGHLIGHT};

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileSubMenu = styled(SubMenu)`
  background: ${Color.MAIN};
  color: ${Color.TEXT_MAIN};
  border-top: 1px solid ${Color.HIGHLIGHT};
`;

export const MobileItem = styled(Menu.Item)`
  background: ${Color.MAIN};
  color: ${Color.TEXT_MAIN};
`;

export const Item = styled(MobileSubMenu)`
  i {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  .ant-menu-light,
  .ant-menu-submenu-active {
    color: ${Color.TEXT_MAIN};
  }

  .ant-menu-inline.ant-menu-root,
  .ant-menu-submenu-title {
    padding-left: 23px !important;
  }
`;

export const MobileAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  @media (min-width: 1024px) {
    display: none;
  }

  label {
    display: flex;
    align-items: center;

    svg {
      padding-left: 5px;
    }
  }
`;

export const StyledHamburger = styled(GiHamburgerMenu)``;
