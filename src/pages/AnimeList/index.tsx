import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Spin } from "antd";
import { GenreParamProps } from "../../model/param";
import { Anime } from "../../model/anime";
import { daisukiApi } from "../../services/api";
import { genres } from "../../shared/util/genre-utils";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import AnimeCard from "../../components/AnimeCard";
import BackTop from "../../components/BackTop";
import NotFound from "../NotFound";
import { Title, StyledList, SpinContainer, NoData } from "./styles";

interface Props {
  request: "genre" | "anime" | "search";
  search?: boolean;
}

const AnimeList = ({ request, search = false }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isInvalidLink, setIsInvalidLink] = useState<boolean>(false);

  const params: GenreParamProps = useParams();

  const getAnimesByGenre = async (page: number) => {
    await daisukiApi
      .get(`/animes/genres/${genres[params.genre]}?page=${page}&per_page=24`)
      .then((res) => {
        setTotal(res.data.total);
        setAnimes(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setIsInvalidLink(true);
      });
  };

  const handleChange = (page: number) => {
    if (request === "genre") {
      getAnimesByGenre(page);
    }
    setCurrentPage(page);
  };

  useEffect(() => {
    if (request === "genre") {
      getAnimesByGenre(currentPage);
    }
  }, []);

  return (
    <>
      {!isInvalidLink && (
        <>
          <Header />
          <main>
            {!loading && (
              <Title>
                {request === "genre" && `Animes de ${genres[params.genre]}`}
              </Title>
            )}
            <section>
              <StyledList>
                {loading ? (
                  <SpinContainer>
                    <Spin size="large" />
                  </SpinContainer>
                ) : !animes[0] ? (
                  <NoData>Nada encontrado</NoData>
                ) : (
                  animes.map((anime) => (
                    <li key={anime.id}>
                      <AnimeCard anime={anime} showRating />
                    </li>
                  ))
                )}
              </StyledList>
              {total > 24 && (
                <Pagination
                  current={currentPage}
                  pageSize={24}
                  total={total}
                  onChange={handleChange}
                />
              )}
            </section>
          </main>
          <BackTop />
        </>
      )}{" "}
      {isInvalidLink && <NotFound />}
    </>
  );
};

export default AnimeList;
