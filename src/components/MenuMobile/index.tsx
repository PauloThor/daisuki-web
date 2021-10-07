import { Dropdown, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Container,
  MenuStyles,
  MobileMenu,
  StyledItem,
  StyledSubMenu,
} from "./styles";

interface MenuMobileProps {
  isAuth: boolean;
}

const MenuMobile = ({ isAuth }: MenuMobileProps) => {
  const menu = (
    <Menu style={MenuStyles} mode="inline">
      <StyledSubMenu key="sub0" title="Animes">
        <StyledItem key="1">Em lançamento</StyledItem>
        <StyledItem key="2">Completos</StyledItem>
        <StyledItem key="3">Legendados</StyledItem>
        <StyledItem key="4">Dublados</StyledItem>
        <StyledItem key="5">Top animes</StyledItem>
      </StyledSubMenu>
      <StyledSubMenu key="sub1" title="Filmes">
        <StyledItem key="6">Legendados</StyledItem>
        <StyledItem key="7">Dublados</StyledItem>
        <StyledItem key="8">Top filmes</StyledItem>
      </StyledSubMenu>

      <StyledSubMenu key="sub2" title="Gênero">
        <StyledItem key="9">Ação</StyledItem>
        <StyledItem key="10">Aventura</StyledItem>
        <StyledItem key="11">Comédia</StyledItem>
      </StyledSubMenu>
    </Menu>
  );

  const menu2 = (
    <MobileMenu
      onClick={() => console.log()}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub1" title="Navigation One">
        <Menu.ItemGroup key="g1" title="Item 1">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Item 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub2" title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </MobileMenu>
  );
  return (
    <>
      <Container>
        <Dropdown overlay={menu2}>
          <a onClick={(e) => e.preventDefault()} href="/">
            <GiHamburgerMenu size={35} color="white" />
          </a>
        </Dropdown>
      </Container>
      {/* <Menu
        onClick={() => console.log()}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu key="sub1" title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu> */}
    </>
  );
};

export default MenuMobile;
