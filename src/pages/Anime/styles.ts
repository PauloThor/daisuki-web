import styled from "styled-components";
import { Font } from "../../model/enums/theme-fonts";
import { Color } from "../../model/enums/theme-colors";
import { Collapse } from "antd";
import { Link } from "react-router-dom";

interface HeaderAnimeDataProps {
  isFavorite: boolean;
}

interface EpisodeProps {
  watched: boolean;
}

const mountedStyle = "inAnimation 300ms ease-in";
const unmountedStyle = {
  animation: "outAnimation 350ms ease-out",
  animationFillMode: "forwards",
};

export const Container = styled.main`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;

export const InfoAnime = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 1rem;
    max-height: 35rem;
    padding: 1rem 2rem;
  }
`;

export const AnimeData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderAnimeData = styled.div<HeaderAnimeDataProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;

  h1 {
    color: ${Color.TEXT_MAIN};
    font-size: 1.2rem;
    overflow: hidden;
    font-family: ${Font.MAIN};
    max-width: 80vw;

    @media (min-width: 768px) {
      max-width: 40vw;
      font-size: 1.5rem;
    }
    @media (min-width: 1000px) {
      max-width: 55vw;
    }
  }

  button {
    margin: 0;
    background-color: transparent;
    width: 25px;
    height: 25px;
    border: none;
    position: relative;
    animation: ${({ isFavorite }) =>
      isFavorite ? mountedStyle : unmountedStyle.animation};

    &:hover svg {
      @media (min-width: 1025px) {
        display: none;
      }
    }
    &:hover span {
      @media (min-width: 1025px) {
        display: block;
        > svg {
          display: block;
          opacity: 100%;
        }
      }
    }

    span {
      display: none;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      top: 0;

      svg {
        path {
          fill: ${Color.HIGHLIGHT};
        }
      }
    }
    path {
      fill: ${Color.HIGHLIGHT_DARK};
    }
    svg {
      width: 25px;
      height: 25px;
      opacity: 100%;
      path {
        fill: ${({ isFavorite }) => isFavorite && Color.HIGHLIGHT_DARK};
      }
    }

    @media (min-width: 768px) {
      svg {
        width: 35px;
        height: 35px;
      }
    }

    @keyframes inAnimation {
      0% {
        opacity: 0;
        visibility: hidden;
      }
      50% {
        opacity: 0.5;
        visibility: visible;
      }
      100% {
        opacity: 1;
        visibility: visible;
      }
    }

    @keyframes outAnimation {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 0.1;
        color: transparent;
      }
    }
  }
`;

export const AnimeCover = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 15px;
    width: 100%;
    object-fit: cover;

    @media (min-width: 768px) {
      margin-bottom: 0;
      width: 270px;
      height: 400px;
    }
  }

  button {
    background-color: transparent;
    border: 1px solid ${Color.HIGHLIGHT_DARK};
    margin: 0 auto;
    font-family: ${Font.MAIN};

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .ant-rate {
    li {
      color: #a4ccf4;
    }
  }

  .ant-rate-text {
    font-weight: bolder;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    height: 90%;
    margin-bottom: 0;
  }

  p {
    font-size: 1rem;
    font-family: ${Font.MAIN};
    color: ${Color.TEXT_MAIN};
  }
`;

export const ListEpisodes = styled.ul`
  list-style: none;
  margin-top: 10px;
  padding: 0 1rem;
  padding-bottom: 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
    padding-bottom: 1.5rem;
  }

  li + li {
    margin-top: 4px;
  }
`;

export const AnimeEpisode = styled.li<EpisodeProps>`
  background-color: ${({ watched }) =>
    watched ? Color.MAIN_LIGHT : Color.MAIN};
  height: 2.5rem;
  font-size: 1rem;
  color: ${Color.TEXT_MAIN};
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    color: ${Color.TEXT_MAIN};
    filter: brightness(0.8);
  }

  @media (min-width: 768px) {
    height: 3.5rem;
  }
`;

export const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const StyledCollapse = styled(Collapse)`
  background-color: ${Color.MAIN_DARK};
  border-color: ${Color.MAIN_LIGHT};
  border-radius: 3px;
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  color: ${Color.TEXT_MAIN};

  .ant-collapse-header {
    border: 2px solid ${Color.MAIN_LIGHT};
    span {
      color: white;
      font-size: 1.2rem;

      @media (min-width: 768px) {
        font-size: 1.4rem;
      }
    }
  }
  .ant-collapse-content-box {
    padding: 0;
  }
  .ant-collapse-content,
  .ant-collapse-content-active {
    border-color: ${Color.MAIN_LIGHT};
    background-color: ${Color.MAIN_DARK};
  }

  .ant-collapse-item,
  .ant-collapse-item-active {
    border: none;
  }
`;

export const StyledListEpisodes = styled(ListEpisodes)`
  padding: 0;
`;

export const Genres = styled.div`
  display: none;
  gap: 1rem;
  margin-top: 15px;
  font-size: 1rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Genre = styled(Link)`
  padding: 0.5rem;
  height: 1.8rem;
  border: 1px solid ${Color.TEXT_MAIN};
  border-radius: 3px;
  font-size: 1rem;
  color: ${Color.TEXT_MAIN};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    color: ${Color.TEXT_MAIN};
    border: 1px solid ${Color.HIGHLIGHT_DARK};
  }
`;

export const Synopsis = styled.p`
  max-height: 11rem;
  margin-top: auto;
  overflow: auto;
  display: none;
  font-size: 1rem;

  &::-webkit-scrollbar {
    width: 10px;
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

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 30px;
`;

export const StyledLink = styled(Link)`
  font-size: 1rem;
  color: ${Color.TEXT_MAIN};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0rem 0.5rem;

  &:hover {
    color: ${Color.TEXT_MAIN};
  }

  &:focus {
    border: 1px solid ${Color.MAIN_LIGHT};
  }

  @media (min-width: 768px) {
    padding: 0rem 1rem;
  }
`;
