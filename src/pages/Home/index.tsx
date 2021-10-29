import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Motion from "../../components/Motion";
import { Spin } from "antd";
import Header from "../../components/Header";
import bannerImg from "../../assets/img/banner.png";
import EpisodeCard from "../../components/EpisodeCard";
import Pagination from "../../components/Pagination";
import AnimeCard from "../../components/AnimeCard";
import Carousel from "../../components/Carousel";
import rimuruImg from "../../assets/img/avatar-matheus.png";
import umaruImg from "../../assets/img/avatar-laiane.png";
import milimImg from "../../assets/img/avatar-emanuela.png";
import bokutoImg from "../../assets/img/avatar-thor.png";
import sailorImg from "../../assets/img/avatar-thaina.png";
import BackTop from "../../components/BackTop";
import { Episode } from "../../model/episode";
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
  Footer,
  Developers,
  FooterImg,
  SpinContainer,
} from "./styles";
import Chat from "../../components/Chat";
import { useUser } from "../../hooks/User";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [popularAnimes, setPopularAnimes] = useState<Anime[]>([]);
  const [latestAnimes, setLatestAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { token } = useUser();

  const requireData = async () => {
    await daisukiApi
      .get("/episodes")
      .then((res) => {
        setTotal(res.data.total);
        setEpisodes(res.data.data);
      })
      .catch((err) => console.log(err));

    await daisukiApi
      .get("/animes/most-popular")
      .then((res) => setPopularAnimes(res.data))
      .catch((err) => console.log(err));

    await daisukiApi
      .get("/animes/latest")
      .then((res) => setLatestAnimes(res.data))
      .catch((err) => console.log(err));

    setLoading(false);
  };

  const handleChange = (page: number) => {
    daisukiApi
      .get(`/episodes?page=${page}`)
      .then((res) => {
        setEpisodes(res.data.data);
      })
      .catch((err) => console.log(err));
    setCurrentPage(page);
  };

  useEffect(() => {
    requireData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Anime Daisuki! | Início</title>
      </Helmet>
      <Motion>
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
        {loading ? (
          <SpinContainer>
            <Spin size="large" />
          </SpinContainer>
        ) : (
          <Main>
            <Section>
              <Title>Lançamentos</Title>
              <ReleasesList>
                {episodes.map((episode) => (
                  <li key={episode.id}>
                    <EpisodeCard episode={episode} />
                  </li>
                ))}
              </ReleasesList>
              <Pagination
                current={currentPage}
                pageSize={12}
                total={total}
                onChange={handleChange}
              />
            </Section>
            <Section>
              <Title>Animes mais populares</Title>
              <Carousel>
                {popularAnimes.map((anime, index) => (
                  <AnimeCard key={index} anime={anime} rank={index + 1} />
                ))}
              </Carousel>
            </Section>
            <Section>
              <Title>Últimos animes adicionados</Title>
              <Carousel>
                {latestAnimes.map((anime, index) => (
                  <AnimeCard key={index} anime={anime} />
                ))}
              </Carousel>
            </Section>
          </Main>
        )}
        {!!token && <Chat />}
        <Footer>
          <div>
            <p>
              Projeto realizado com fins didáticos. Os vídeos são somente
              prévias dos episódios.
              <br /> Todos os direitos de personagens e obras pertencem aos
              respectivos proprietários.
            </p>
            <Developers>
              <p>Aplicação desenvolvida por:</p>
              <div>
                <a
                  href="https://github.com/matheuspaivah2"
                  target="_blank"
                  rel="noreferrer"
                  title="Matheus Paiva"
                >
                  <img src={rimuruImg} alt="Rimuru" />
                </a>
                <a
                  href="https://github.com/laianesuzart"
                  target="_blank"
                  rel="noreferrer"
                  title="Laiane Suzart"
                >
                  <img src={umaruImg} alt="Umaru" />
                </a>
                <a
                  href="https://github.com/emanuelakenzie"
                  target="_blank"
                  rel="noreferrer"
                  title="Emanuela Quizini"
                >
                  <img src={milimImg} alt="Milim" />
                </a>
                <a
                  href="https://github.com/PauloThor"
                  target="_blank"
                  rel="noreferrer"
                  title="Paulo Thor"
                >
                  <img src={bokutoImg} alt="Bokuto" />
                </a>
                <a
                  href="https://github.com/thainaferreira"
                  target="_blank"
                  rel="noreferrer"
                  title="Thainá Ferreira"
                >
                  <img src={sailorImg} alt="Sailor Moon" />
                </a>
              </div>
              <p>NekoNekoMi - 2021</p>
            </Developers>
            <FooterImg />
          </div>
        </Footer>
        <BackTop />
      </Motion>
    </>
  );
};

export default Home;
