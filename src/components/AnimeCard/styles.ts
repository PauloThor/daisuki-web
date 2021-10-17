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

  &:hover,
  &:focus {
    img {
      filter: grayscale(0.8);
    }
  }
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4px 0;
  color: ${Color.TEXT_MAIN};
  font-size: 1rem;
  text-align: center;
  background-color: rgba(26, 26, 26, 0.9);
`;

export const Rank = styled.div`
  color: ${Color.HIGHLIGHT_LIGHT};
  font-size: 1.5rem;
  font-weight: 700;
  background-color: rgba(13, 7, 13, 0.8);
  position: absolute;
  top: 0;
  width: 38px;
  height: 36px;
  border-bottom-right-radius: 20px;
`;

export const Rating = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  color: ${Color.TEXT_MAIN};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  background-color: rgba(26, 26, 26, 0.9);
  border-radius: 4px;
  padding: 1px 4px;

  svg {
    color: ${Color.TEXT_SECONDARY};
    margin-left: 2px;
  }
`;
