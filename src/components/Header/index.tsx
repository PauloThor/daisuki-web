import { Container } from "./styles";
import Logo from "../../assets/img/logo.svg";
import DropdownItem from "../Dropdown";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <DropdownItem title="teste" />
    </Container>
  );
};

export default Header;
