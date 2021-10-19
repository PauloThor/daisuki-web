import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { Color } from "../../model/enums/theme-colors";
import { Anime } from "../../model/anime";
import { daisukiApi } from "../../services/api";
import SpinLoading from "../SpinLoading";
import {
  AnimeContainer,
  Info,
  InfoItem,
  InfoList,
  Item,
  SearchContainer,
  SearchInput,
  SearchWrapper,
  Title,
} from "./styles";
import StringUtils from "../../shared/util/string-utils";
import { useHistory } from "react-router";

interface InputSearchProps {
  placeholder: string;
  maxWidth?: string;
}

const InputSearch = ({ placeholder, maxWidth = "350px" }: InputSearchProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async (text: string) => {
    setIsLoading(true);
    let output = [];
    if (text) {
      const res = await daisukiApi.get(`/animes/search/${text}?per_page=3`);
      output = res.data.data;
    }
    setList(output);
    setIsLoading(false);
  };

  const validationProps = {
    isFocused,
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getData(e.target.value);
  };

  const history = useHistory();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && isFocused) {
      e.preventDefault();
      setList([]);
      return history.push(`/search/${value}`);
    }
  };

  return (
    <SearchContainer {...validationProps} className="search-container">
      <SearchWrapper {...validationProps} style={{ maxWidth: maxWidth }}>
        <SearchInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(evt)
          }
          placeholder={placeholder}
          value={value}
          id="search-input"
          autoComplete="off"
          onKeyPress={handleKeyPress}
        />
        {isLoading ? (
          <SpinLoading size="small" />
        ) : (
          <FiSearch color={Color.TEXT_MAIN} />
        )}
      </SearchWrapper>
      <AnimeContainer key="anime-page">
        {list.map((anime, index) => (
          <Item
            key={`${anime.name}-a${index}`}
            to={`/animes/${StringUtils.urlMask(anime?.name)}`}
          >
            <img alt={anime.name} src={anime.imageUrl} />
            <Info>
              <Title>
                <p>{anime.name}</p>
              </Title>
              <InfoList>
                <InfoItem>
                  <label>Nota: </label>
                  <label>{anime?.rating?.toFixed(2) ?? "N/A"}</label>
                </InfoItem>
                <InfoItem>
                  <label>Status: </label>
                  <label>
                    {anime.isCompleted ? "Completo" : "Em lançamento"}
                  </label>
                </InfoItem>
                <InfoItem>
                  <label>Total de episódios: </label>
                  <label>{anime.totalEpisodes}</label>
                </InfoItem>
              </InfoList>
            </Info>
          </Item>
        ))}
      </AnimeContainer>
    </SearchContainer>
  );
};

export default InputSearch;
