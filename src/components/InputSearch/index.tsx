import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { Color } from "../../model/enums/theme-colors";
import { daisukiApi } from "../../services/api";
import SpinLoading from "../SpinLoading";
import { SearchContainer, SearchInput, SearchWrapper } from "./styles";

interface InputSearchProps {
  placeholder: string;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxWidth?: string;
}

const InputSearch = ({ placeholder, maxWidth = "270px" }: InputSearchProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async (text: string) => {
    setIsLoading(true);
    const res = await daisukiApi.get(`/animes/search/${text}`);
    console.log(res.data.data);
    setList(res.data.data);
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

    if (e.target.value) {
      console.log(e.target.value);
      getData(e.target.value);
    }
  };

  return (
    <SearchContainer {...validationProps}>
      <SearchWrapper {...validationProps} style={{ maxWidth: maxWidth }}>
        <SearchInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(evt)
          }
          placeholder={placeholder}
          value={value}
        />
        {isLoading ? (
          <SpinLoading size="small" />
        ) : (
          <FiSearch color={Color.TEXT_MAIN} />
        )}
      </SearchWrapper>
    </SearchContainer>
  );
};

export default InputSearch;
