import { Container } from "./styles";
import Logo from "../../assets/img/logo.svg";
import DropdownItem from "../Dropdown";

const Header = () => {
  const animeItems = [
    {
      name: "Em lançamento",
      path: "/animes/airing",
    },
    {
      name: "Completos",
      path: "/animes/completed",
    },
    {
      name: "Legendados",
      path: "/animes/subbed",
    },
    {
      name: "Dublados",
      path: "/animes/dubbed",
    },
    {
      name: "Top animes",
      path: "/animes/top",
    },
  ];

  const movieItems = [
    {
      name: "Legendados",
      path: "/movies/airing",
    },
    {
      name: "Dublados",
      path: "/movies/dubbed",
    },
    {
      name: "Top filmes",
      path: "/movies/top",
    },
  ];

  return (
    <Container>
      <img src={Logo} alt="logo" />
      <DropdownItem title="Animes" items={animeItems} />
      <DropdownItem title="Filmes" items={movieItems} />
    </Container>
  );
};

export default Header;
