import {
  Container,
  Divider,
  HeaderItem,
  Item,
  MobileAuth,
  MobileItem,
  MobileMenu,
  MobileSubMenu,
  ProfileContainer,
  ProfileLink,
  StyledLink,
} from "./styles";
import Logo from "../../assets/img/logo.svg";
import DropdownItem from "../Dropdown";
import InputText from "../InputText";
import { InputTypes } from "../../model/enums/input-types";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaUtils from "../../shared/util/schema-utils";
import MenuUtils from "../../shared/util/menu-items-utils";

import { Link, useHistory } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import Profile from "../Profile";
import Favorites from "../Favorites";
import { useUser } from "../../hooks/User";
import { Anime } from "../../model/anime";

interface HeaderProps {
  isAuth?: boolean;
}

const Header = ({ isAuth = true }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const [favoritesOpen, setFavoritesOpen] = useState<boolean>(false);

  const history = useHistory();
  const { favorites, logout, deleteFavorite } = useUser();

  const handleOpenMenu = () => setMenuOpen(!menuOpen);
  const handleOpenProfile = () => {
    setProfileOpen(!profileOpen);
    setFavoritesOpen(false);
  };
  const handleOpenFavorites = () => {
    setFavoritesOpen(!favoritesOpen);
    setProfileOpen(false);
  };

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  const handlePath = (path: string) => history.push(path);

  const methods = useForm({
    resolver: yupResolver(SchemaUtils.register()),
    mode: "all",
  });

  const onSubmit = (data: any) => console.log(data);

  const renderMobileMenu = () => (
    <MobileMenu onClick={() => console.log()} mode="inline">
      <MobileSubMenu key="submobile1" title="Animes">
        {MenuUtils.animes.map((item, index) => (
          <MobileItem
            key={`anime-mobile-${index}`}
            onClick={() => handlePath(item.path)}
          >
            {item.name}
          </MobileItem>
        ))}
      </MobileSubMenu>
      <MobileSubMenu key="submobile2" title="Filmes">
        {MenuUtils.movies.map((item, index) => (
          <MobileItem
            key={`movie-mobile-${index}`}
            onClick={() => handlePath(item.path)}
          >
            {item.name}
          </MobileItem>
        ))}
      </MobileSubMenu>
      <MobileSubMenu key="submobile3" title="Gênero">
        {MenuUtils.genders.map((item, index) => (
          <MobileItem
            key={`gender-mobile-${index}`}
            onClick={() => handlePath(item.path)}
          >
            {item.name}
          </MobileItem>
        ))}
      </MobileSubMenu>
      {!isAuth && (
        <>
          <StyledLink to="/register">
            <div style={{ width: "23px" }} />
            <Item key="signup-mobile-1" title="Cadastrar" />
          </StyledLink>
          <StyledLink to="/login">
            <Item key="login-mobile-1" title="Entrar" />
          </StyledLink>
        </>
      )}
    </MobileMenu>
  );

  const avatarMenuItems = [
    {
      name: "Minha conta",
      event: handleOpenProfile,
    },
    {
      name: "Favoritos",
      event: handleOpenFavorites,
    },
    {
      name: "Histórico",
      event: handleOpenFavorites,
    },
    {
      name: "Sair",
      event: handleLogout,
    },
  ];

  const favoritesList = favorites.map((favorite: Anime) => {
    return {
      name: favorite.name,
      onPress: () => deleteFavorite(favorite.id),
    };
  });

  return (
    <Container>
      <Link to="/" className="link-logo">
        <img src={Logo} alt="logo" />
      </Link>
      <HeaderItem>
        <DropdownItem title="Animes" items={MenuUtils.animes} />
        <DropdownItem title="Filmes" items={MenuUtils.movies} />
        <DropdownItem title="Gênero" items={MenuUtils.genders} />
      </HeaderItem>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <InputText placeholder="Buscar anime" type={InputTypes.SEARCH} />
        </form>
      </FormProvider>
      {!isAuth ? (
        <HeaderItem>
          <ProfileLink to="/login">Entrar</ProfileLink>
          <Divider />
          <ProfileLink to="/register">Cadastrar</ProfileLink>
        </HeaderItem>
      ) : (
        <HeaderItem>
          <DropdownItem
            title="avatar"
            hasAvatar
            items={avatarMenuItems}
            key={"desktop-dropdown-1"}
          />
        </HeaderItem>
      )}
      {!isAuth ? (
        <GiHamburgerMenu
          size={35}
          className="hamburger-menu"
          onClick={handleOpenMenu}
        />
      ) : (
        <MobileAuth>
          <label onClick={handleOpenMenu}>
            Navegar <TiArrowSortedDown size={20} />
          </label>
          <DropdownItem
            title="avatar"
            hasAvatar
            items={avatarMenuItems}
            key={"mobile-dropdown-1"}
          />
        </MobileAuth>
      )}

      {menuOpen && renderMobileMenu()}
      {profileOpen && (
        <ProfileContainer>
          <Profile onClose={handleOpenProfile} />
        </ProfileContainer>
      )}
      {favoritesOpen && (
        <ProfileContainer>
          <Favorites onClose={handleOpenFavorites} list={favoritesList} />
        </ProfileContainer>
      )}
    </Container>
  );
};

export default Header;
