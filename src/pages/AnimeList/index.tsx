import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { Spin } from "antd";
import { AnimeListParamProps } from "../../model/param";
import { Anime } from "../../model/anime";
import { daisukiApi } from "../../services/api";
import {
  genres,
  alphabet,
  endpointByParam,
  titleByParam,
} from "../../shared/util/anime-list-utils";
import StringUtils from "../../shared/util/string-utils";
import Motion from "../../components/Motion";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import AnimeCard from "../../components/AnimeCard";
import BackTop from "../../components/BackTop";
import NotFound from "../NotFound";
import itachi from "../../assets/img/itachi.png";
import {
  Title,
  StyledList,
  SpinContainer,
  NoData,
  FilterMenu,
  StyledButton,
} from "./styles";
import Chat from "../../components/Chat";
import { useUser } from "../../hooks/User";

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
  const { token } = useUser();
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

  const getAnimesBySearch = async (page: number) => {
    await daisukiApi
      .get(
        `/animes/search/${StringUtils.removeDashFromUrl(
          params.search
        )}?page=${page}&per_page=24`
      )
      .then((res) => {
        setTotal(res.data.total);
        setAnimes(res.data.data);
        setTitle(
          `Resultado da busca por: ${StringUtils.removeDashFromUrl(
            params.search
          )}`
        );
        setLoading(false);
      });
  };

  const getAnimesByStatus = async (page: number, letter?: string) => {
    const url = endpointByParam[params.filter] ?? "";
    await daisukiApi
      .get(
        `${url}&page=${page}&per_page=24${
          letter ? `&starts_with=${letter}` : ""
        }`
      )
      .then((res) => {
        setTotal(res.data.total);
        setAnimes(res.data.data);
        setTitle(titleByParam[params.filter] ?? "");
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
    if (request === "genre") {
      getAnimesByGenre(currentPage, letter);
    }
    if (request === "filter") {
      getAnimesByStatus(currentPage, letter);
    }
  };

  useEffect(() => {
    if (request === "genre") {
      getAnimesByGenre(currentPage);
    }
    if (request === "search") {
      getAnimesBySearch(currentPage);
    }
    if (request === "filter") {
      getAnimesByStatus(currentPage);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (request === "search") {
      getAnimesBySearch(currentPage);
    }
    // eslint-disable-next-line
  }, [params.search]);

  useEffect(() => {
    if (request === "genre") {
      getAnimesByGenre(currentPage);
    }
    // eslint-disable-next-line
  }, [params.genre]);

  useEffect(() => {
    if (request === "filter") {
      getAnimesByStatus(currentPage);
    }
    // eslint-disable-next-line
  }, [params.filter]);

  return (
    <>
      <Helmet>
        <title>{`Anime Daisuki! | ${title}`}</title>
      </Helmet>
      <Motion>
        {!isInvalidLink && (
          <>
            <Header />
            <main>
              {!!title && (
                <>
                  <Title>{title}</Title>
                  {!search && (
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
                  )}
                </>
              )}
              <section>
                <StyledList>
                  {loading ? (
                    <SpinContainer>
                      <Spin size="large" />
                    </SpinContainer>
                  ) : !animes[0] ? (
                    <NoData>
                      <img src={itachi} alt="Itachi" />
                      <p>Nada encontrado</p>
                    </NoData>
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
        )}
        {isInvalidLink && <NotFound />}
      </Motion>
      {!!token && <Chat />}
    </>
  );
};

export default AnimeList;
