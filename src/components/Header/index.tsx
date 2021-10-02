import { Container, Divider, HeaderItem, ProfileLink } from "./styles";
import Logo from "../../assets/img/logo.svg";
import DropdownItem from "../Dropdown";
import InputText from "../InputText";
import { InputTypes } from "../../model/enums/input-types";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaUtils from "../../shared/util/schema-utils";
import MenuUtils from "../../shared/util/menu-items-utils";

import mock from "../../assets/img/avatar-thor.png";

interface HeaderProps {
  isAuth?: boolean;
}

const Header = ({ isAuth = false }: HeaderProps) => {
  const methods = useForm({
    resolver: yupResolver(SchemaUtils.register()),
    mode: "all",
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <img src={Logo} alt="logo" />
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
          <ProfileLink to="/login">Cadastrar</ProfileLink>
        </HeaderItem>
      ) : (
        <HeaderItem>
          <img src={mock} alt="avatar" />
        </HeaderItem>
      )}
    </Container>
  );
};

export default Header;
