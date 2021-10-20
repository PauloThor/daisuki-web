import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";
import { GiBrokenHeart } from "react-icons/gi";
import { Popconfirm } from "antd";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Options = styled.section`
  margin: 10px 0px;
  overflow-y: auto;
  height: 85%;
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    padding-bottom: 2rem;
  }

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: #2a2a2a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Color.MAIN_LIGHT};

    &:hover {
      background-color: ${Color.MAIN};
    }
  }
  @media (max-width: 768px) {
    &:last-child {
      padding-bottom: 10rem;
    }
  }
`;

export const UnfavoriteIcon = styled(GiBrokenHeart)`
  color: ${Color.HIGHLIGHT_DARK};

  &:hover {
    color: ${Color.HIGHLIGHT};
  }
`;

export const Pop = styled(Popconfirm)`
  .ant-popover-buttons {
    display: flex;
    justify-content: center;
  }
`;

export const LinkAnime = styled(Link)`
  color: ${Color.TEXT_MAIN};

  display: flex;
  background-color: ${Color.MAIN};
  padding: 5px;
  cursor: pointer;
  transition: 0.3s ease-in;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    height: 3.5rem;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    height: 4.5rem;
    font-size: 1.1rem;
  }

  @media (min-width: 1025px) {
    height: 3.2rem;

    font-size: 1rem;
  }

  svg {
    opacity: 0;
    transition: 0.5s;
  }

  p {
    max-width: 85%;
  }
  &:hover,
  &:focus {
    color: ${Color.HIGHLIGHT_LIGHT};

    svg {
      opacity: 1;
    }
  }

  :nth-child(2n) {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    svg {
      opacity: 1;
    }
  }
`;
