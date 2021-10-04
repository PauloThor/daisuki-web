import { Dropdown, Menu } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { Container, MenuStyles, StyledItem, StyledSubMenu } from "./styles";

const MenuMobile = () => {
  const menu = (
    <Menu style={MenuStyles}>
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
  return (
    <>
      <Container>
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()} href="/">
            <GiHamburgerMenu size={35} color="white" />
          </a>
        </Dropdown>
      </Container>
    </>
  );
};

export default MenuMobile;
