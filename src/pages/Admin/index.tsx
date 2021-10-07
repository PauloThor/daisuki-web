import Header from "../../components/Header";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { Container, Box } from "./styles";

const Admin = () => {
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
