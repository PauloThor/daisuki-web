import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "../../model/enums/theme-colors";

export const Container = styled(Link)`
  position: relative;
  display: block;
  width: fit-content;
  transition: 0.3s ease-in-out;

  img {
    width: 142px;
    height: 192px;
    object-fit: cover;

    @media (min-width: 768px) {
      width: 226px;
      height: 286px;
    }
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 4px 0;
    color: ${Color.TEXT_MAIN};
    font-size: 1rem;
    text-align: center;
    background-color: rgba(26, 26, 26, 0.9);
  }

  &:hover,
  &:focus {
    filter: grayscale(0.8);
  }
`;
