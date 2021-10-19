import {
  Container,
  Divider,
  HeaderItem,
  HeaderSection,
  Item,
  MobileAuth,
  MobileItem,
  MobileMenu,
  MobileSubMenu,
  ProfileContainer,
  ProfileLink,
  SearchContainer,
  StyledLink,
} from "./styles";
import Logo from "../../assets/img/logo.svg";
import DropdownItem from "../Dropdown";
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
import SpinLoading from "../SpinLoading";
import Watched from "../Watched";
import InputSearch from "../InputSearch";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const [favoritesOpen, setFavoritesOpen] = useState<boolean>(false);
  const [historyOpen, setHistoryOpen] = useState<boolean>(false);
  const { token, user } = useUser();

  const history = useHistory();
  const { favorites, logout, isLoading, watched } = useUser();

  const handleOpenMenu = () => setMenuOpen(!menuOpen);
  const handleOpenProfile = () => {
    closeAll();
    setProfileOpen(!profileOpen);
  };
  const handleOpenFavorites = () => {
    closeAll();
    setFavoritesOpen(!favoritesOpen);
  };
  const handleOpenHistory = () => {
    closeAll();
    setHistoryOpen(!historyOpen);
  };

  const closeAll = () => {
    setProfileOpen(false);
    setFavoritesOpen(false);
    setHistoryOpen(false);
  };

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  const pathToAdmin = () => history.push("/admin");

  const handlePath = (path: string) => history.push(path);

  const methods = useForm({
    resolver: yupResolver(SchemaUtils.register()),
    mode: "all",
  });

  const onSubmit = (data: any) => console.log(data);

  const renderMobileMenu = () => (
    <MobileMenu mode="inline">
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
      {!token && (
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
      <SearchContainer>
        <InputSearch placeholder="Buscar um anime" maxWidth="100%" />
      </SearchContainer>
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
      event: handleOpenHistory,
    },
    {
      name: "Sair",
      event: handleLogout,
    },
  ];

  const getAvatarItems = () => {
    const adminItem = {
      name: "Central de upload",
      event: pathToAdmin,
    };
    return user.permission === "user"
      ? avatarMenuItems
      : [adminItem, ...avatarMenuItems];
  };

  const favoritesList = favorites.map((favorite: Anime) => {
    return {
      name: favorite.name,
      id: favorite.id,
    };
  });

  return (
    <Container>
      <HeaderSection>
        <Link to="/" className="link-logo">
          <img src={Logo} alt="logo" className="header-logo" />
        </Link>
        <HeaderItem>
          <DropdownItem title="Animes" items={MenuUtils.animes} />
          <DropdownItem title="Filmes" items={MenuUtils.movies} />
          <DropdownItem title="Gênero" items={MenuUtils.genders} />
        </HeaderItem>
      </HeaderSection>
      <HeaderSection>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <InputSearch placeholder="Buscar anime" />
          </form>
        </FormProvider>
        {!token ? (
          <HeaderItem>
            <ProfileLink to="/login">Entrar</ProfileLink>
            <Divider />
            <ProfileLink to="/register">Cadastrar</ProfileLink>
          </HeaderItem>
        ) : (
          <HeaderItem>
            {isLoading ? (
              <SpinLoading />
            ) : (
              <DropdownItem
                title="avatar"
                hasAvatar
                items={getAvatarItems()}
                key={"desktop-dropdown-1"}
              />
            )}
          </HeaderItem>
        )}
        {!token ? (
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
              items={getAvatarItems()}
              key={"mobile-dropdown-1"}
            />
          </MobileAuth>
        )}
      </HeaderSection>

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
      {historyOpen && (
        <ProfileContainer>
          <Watched onClose={handleOpenHistory} list={watched} />
        </ProfileContainer>
      )}
    </Container>
  );
};

export default Header;
