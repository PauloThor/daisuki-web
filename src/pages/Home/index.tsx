import Header from "../../components/Header";
import bannerImg from "../../assets/img/banner.png";
import { Banner, Text, Image } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Banner>
        <Text>
          <p>
            Assista <span>animes online</span> com qualidade
          </p>
        </Text>
        <Image>
          <img src={bannerImg} alt="Personagem Shuna" />
        </Image>
      </Banner>
    </>
  );
};

export default Home;
