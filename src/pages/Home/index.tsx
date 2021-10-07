import Header from "../../components/Header";
import bannerImg from "../../assets/img/banner.png";
import EpisodeCard from "../../components/EpisodeCard";
import { Banner, Text, Image } from "./styles";

const episode = {
  episode_number: 2,
  image_url: "https://i.imgur.com/q5S1bhz.jpg",
  video_url: "https://streamable.com/44ahcj",
  views: 3184,
  created_at: "2021-10-02 14:54:26",
  anime: {
    id: 14,
    name: "Kami no Tou",
    synopsis:
      "A Torre de Deus gira em torno de um garoto chamado Vigésimo Quinto Bam, que passou a maior parte de sua vida preso sob uma vasta e misteriosa Torre, com apenas sua amiga íntima, Rachel, para fazer-lhe companhia. Quando Rachel entra na Torre, Bam também consegue abrir a porta e enfrenta desafios em cada andar dessa torre enquanto tenta encontrar seu companheiro mais próximo.",
    image_url: "https://i.imgur.com/TnDn5kI.jpg",
    total_episodes: 13,
    is_movie: false,
    is_dubbed: false,
    is_completed: true,
    created_at: "2021-10-02 14:21:48",
  },
};

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
        <EpisodeCard episode={episode}/>

    </>
  );
};

export default Home;
