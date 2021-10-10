import { Color } from "./../../model/enums/theme-colors";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${Color.MAIN_DARK};
  max-width: 401px;
`;

export const Banner = styled.header`
  background-color: ${Color.MAIN};
  height: 124px;
  padding: 10px;
  width: 100%;
`;

export const AvatarContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  img {
    max-width: 96px;
    max-height: 96px;
  }
`;

export const Options = styled.section`
  margin: 10px 0px;

  p {
    background-color: ${Color.MAIN};
    padding: 5px;
    cursor: pointer;
    transition: 0.3s ease-in;

    &:hover,
    focus {
      color: ${Color.HIGHLIGHT_LIGHT};
    }
  }
  p:nth-child(2n) {
    background-color: transparent;
  }

  p:last-child {
    background-color: transparent;
    color: red;
    &:hover {
      text-decoration: underline;
    }
  }
`;
