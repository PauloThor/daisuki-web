import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";
import { GiBrokenHeart } from "react-icons/gi";

export const Container = styled.div``;

export const Options = styled.section`
  margin: 10px 0px;
`;

export const Item = styled.div`
  display: flex;
  background-color: ${Color.MAIN};
  padding: 5px;
  cursor: pointer;
  transition: 0.3s ease-in;
  justify-content: space-between;
  align-items: center;

  &:hover,
  &:focus {
    color: ${Color.HIGHLIGHT_LIGHT};
  }

  :nth-child(2n) {
    background-color: transparent;
  }
`;

export const UnfavoriteIcon = styled(GiBrokenHeart)`
  color: ${Color.HIGHLIGHT_DARK};

  &:hover {
    color: ${Color.HIGHLIGHT_LIGHT};
  }
`;
