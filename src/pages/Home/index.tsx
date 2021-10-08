import { useState, useEffect } from "react";
import Header from "../../components/Header";
import bannerImg from "../../assets/img/banner.png";
import EpisodeCard from "../../components/EpisodeCard";
import Pagination from "../../components/Pagination";
import AnimeCard from "../../components/AnimeCard";
import Carousel from "../../components/Carousel";
import { Anime } from "../../model/anime";
import { daisukiApi } from "../../services/api";
import {
  Banner,
  Text,
  Image,
  Main,
  Section,
  Title,
  ReleasesList,
  Footer
} from "./styles";
import BackTop from "../../components/BackTop";

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

const episodes = [
  episode,
  episode,
  episode,
  episode,
  episode,
  episode,
  episode,
  episode,
  episode,
  episode,
  episode,
  episode,
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [popularAnimes, setPopularAnimes] = useState<Anime[]>([]);
  const [latestAnimes, setLatestAnimes] = useState<Anime[]>([]);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    daisukiApi
      .get("/animes/most-popular")
      .then((res) => setPopularAnimes(res.data))
      .catch((err) => console.log(err));
    daisukiApi
      .get("/animes/latest")
      .then((res) => setLatestAnimes(res.data))
      .catch((err) => console.log(err));
  }, []);

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
      <Main>
        <Section>
          <Title>Lançamentos</Title>
          <ReleasesList>
            {episodes.map((episode, index) => (
              <li key={index}>
                <EpisodeCard episode={episode} />
              </li>
            ))}
          </ReleasesList>
          <Pagination
            current={currentPage}
            pageSize={12}
            total={108}
            onChange={handleChange}
          />
        </Section>
        <Section>
          <Title>Animes mais populares</Title>
          <Carousel>
            {popularAnimes.map((anime, index) => (
              <AnimeCard key={anime.id} anime={anime} rank={index + 1} />
            ))}
          </Carousel>
        </Section>
        <Section>
          <Title>Últimos animes adicionados</Title>
          <Carousel>
            {latestAnimes.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </Carousel>
        </Section>
      </Main>
      <Footer/>
      <BackTop/>
    </>
  );
};

export default Home;
