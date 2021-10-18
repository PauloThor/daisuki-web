import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Spin } from "antd";
import { AnimeListParamProps } from "../../model/param";
import { Anime } from "../../model/anime";
import { daisukiApi } from "../../services/api";
import { genres, alphabet } from "../../shared/util/genre-utils";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import AnimeCard from "../../components/AnimeCard";
import BackTop from "../../components/BackTop";
import NotFound from "../NotFound";
import {
  Title,
  StyledList,
  SpinContainer,
  NoData,
  FilterMenu,
  StyledButton,
} from "./styles";

interface Props {
  request: "genre" | "filter" | "search";
  search?: boolean;
}

const AnimeList = ({ request, search = false }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isInvalidLink, setIsInvalidLink] = useState<boolean>(false);

  const params: AnimeListParamProps = useParams();

  const getAnimesByGenre = async (page: number, letter?: string) => {
    await daisukiApi
      .get(
        `/animes/genres/${genres[params.genre]}?page=${page}&per_page=24${
          letter ? `&starts_with=${letter}` : ""
        }`
      )
      .then((res) => {
        setTotal(res.data.total);
        setAnimes(res.data.data);
        setTitle(`Animes de ${genres[params.genre]}`);
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

  const handleFilter = (letter: string) => {
    setLoading(true);
    setCurrentPage(1);
    getAnimesByGenre(currentPage, letter);
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
            {!!title && (
              <>
                <Title>{title}</Title>
                <FilterMenu>
                  <label htmlFor="filterOptions">Filtrar</label>
                  <input type="checkbox" id="filterOptions" />
                  <ul>
                    <li key="0-9">
                      <StyledButton onClick={() => handleFilter("1")}>
                        0-9
                      </StyledButton>
                    </li>
                    {alphabet.map((letter) => (
                      <li key={letter}>
                        <StyledButton onClick={() => handleFilter(letter)}>
                          {letter}
                        </StyledButton>
                      </li>
                    ))}
                  </ul>
                </FilterMenu>
              </>
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
