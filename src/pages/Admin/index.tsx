import Header from "../../components/Header";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { Container, Box } from "./styles";
import { InputTypes } from "../../model/enums/input-types";

const Admin = () => {
  const inputAnime = [
    {
      name: "animeName",
      placeholder: "Nome do anime",
      label: "Nome do anime*",
      type: InputTypes.TEXT,
    },
    {
      name: "sinopse",
      placeholder: "Uma sinopse bem legal...",
      label: "Sinopse*",
      type: InputTypes.TEXT,
    },
    {
      name: "episodesNumber",
      placeholder: "Número de episódios",
      label: "Total de episódios*",
      type: InputTypes.NUMBER,
    },
  ];

  const checkBoxList = [
    {
      name: "movie",
      placeholder: "Filme",
      label: "Filme",
      type: InputTypes.CHECKBOX,
    },
    {
      name: "dubbed",
      placeholder: "Dublado",
      label: "Dublado",
      type: InputTypes.CHECKBOX,
    },
  ];

  const inputModerator = [];
  const inputEpisode = [
    { name: "", placeholder: "", label: "", type: InputTypes },
  ];

  return (
    <>
      <Header />
      <Container>
        <h2>Adicionar anime:</h2>
        <Box></Box>
        <h2>Adicionar episódio:</h2>
        <Box></Box>
        <h2>Adicionar moderador:</h2>
        <Box></Box>
        <Button text="Ver moderadores" />
      </Container>
    </>
  );
};

export default Admin;
