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

  .header-logo {
    max-width: 120px;
  }

  @media (max-width: 350px) {
    .link-logo {
      padding-right: 10px;
    }

    padding: 15px;
  }

  @media (min-width: 768px) {
    .header-logo {
      max-width: initial;
    }
  }

  .ant-menu-light,
  .ant-menu-item-active,
  .ant-menu-item:hover {
    color: ${Color.HIGHLIGHT};
  }

  .ant-menu-light .ant-menu-item:hover,
  .ant-menu-light .ant-menu-item-active {
    color: ${Color.HIGHLIGHT};
    background-color: ${Color.MAIN};
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${Color.MAIN};
  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-color: ${Color.HIGHLIGHT};
  }

  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background-color: ${Color.MAIN};
  }

  .eBVoYw:hover {
    color: ${Color.HIGHLIGHT};
  }
`;

export const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    padding-left: 20px;
  }

  @media (min-width: 1024px) {
    min-width: 30%;
  }

  @media (min-width: 1800px) {
    min-width: 17%;
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

export const MenuMobileContainer = styled.div``;

export const MobileMenu = styled(Menu)`
  position: absolute;
  width: 100vw;
  z-index: 2;
  top: 78px;
  left: 0;
  animation: fromTop 0.5s;
  background: ${Color.MAIN_LIGHT};

  ul,
  .ant-menu {
    background: ${Color.MAIN};
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

  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
    color: ${Color.HIGHLIGHT};
  }

  border-bottom: 1px solid ${Color.HIGHLIGHT};

  span:active,
  span:focus,
  span:active {
    color: ${Color.HIGHLIGHT};
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileSubMenu = styled(SubMenu)`
  background: ${Color.MAIN};
  color: ${Color.TEXT_MAIN};
  border-top: 1px solid ${Color.HIGHLIGHT};

  &:hover,
  &:focus {
    background: ${Color.MAIN};
  }

  span {
    color: ${Color.TEXT_MAIN};
  }
`;

export const MobileItem = styled(Menu.Item)`
  background: ${Color.MAIN};
  color: ${Color.TEXT_MAIN};

  &:hover,
  &:focus {
    background: ${Color.MAIN};
  }

  span {
    color: ${Color.TEXT_MAIN};
  }
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

  @media (min-width: 400px) {
    label {
      margin-right: 15px;
    }
  }
`;

export const StyledHamburger = styled(GiHamburgerMenu)``;

export const ProfileContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1001;
  animation: fromLeft 1s;

  @keyframes fromLeft {
    from {
      left: -200px;
    }
  }
`;

export const SearchContainer = styled.div`
  background: ${Color.MAIN};
  color: ${Color.TEXT_MAIN};
  border-top: 1px solid ${Color.HIGHLIGHT};

  section {
    border: none;
    height: 40px;
  }
`;
