import styled from "styled-components";
import { Color } from "./../../model/enums/theme-colors";
import { Link } from "react-router-dom";
import { BsCardList } from "react-icons/bs";
import { AiOutlineWechat } from "react-icons/ai";

export const Main = styled.main`
  max-width: 770px;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SpinContainer = styled.div`
  display: grid;
  place-items: center;
  height: 40vh;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  color: ${Color.TEXT_MAIN};
  padding: 10px 0;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const VideoPlayer = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 56.25%;
`;

export const Video = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
`;

export const EpisodeOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Color.TEXT_MAIN};
  font-size: 14px;
  margin-top: 10px;
`;

export const TextOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;

  @media (max-width: 590px) {
    flex-direction: column;
    width: auto;
  }

  @media (max-width: 375px) {
    span:first-child {
      font-size: 12px;
    }
  }
`;

export const ListEpisodes = styled(Link)`
  color: ${Color.TEXT_MAIN};

  &:hover,
  &:focus,
  &:visited {
    color: ${Color.TEXT_MAIN};
  }

  @media (max-width: 590px) {
    font-size: 16px;
  }
`;

export const CardListIcon = styled(BsCardList)`
  color: ${Color.TEXT_MAIN};
  font-size: 16px;
  margin-bottom: -2px;
`;

export const TextButton = styled.span`
  @media (max-width: 590px) {
    display: none;
  }
`;

export const ButtonPrevious = styled.button`
  outline: none;
  border: 1px solid ${Color.TEXT_MAIN};
  background-color: transparent;
  color: ${Color.TEXT_MAIN};
  font-size: 14px;
  padding: 2px 8px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  transition: 400ms;

  &:hover,
  &:focus {
    border: 1px solid ${Color.HIGHLIGHT};
    color: ${Color.HIGHLIGHT};
  }

  @media (max-width: 590px) {
    font-size: 24px;
    width: 48px;
    height: 40px;
  }
`;

export const ButtonNext = styled(ButtonPrevious)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const ChatIcon = styled(AiOutlineWechat)`
  font-size: 30px;
  color: ${Color.TEXT_MAIN};
  margin-bottom: -5px;

  @media (max-width: 590px) {
    font-size: 25px;
  }
`;

export const Comment = styled.h2`
  font-size: 24px;
  font-weight: normal;
  color: ${Color.TEXT_MAIN};
  padding-top: 20px;

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;
