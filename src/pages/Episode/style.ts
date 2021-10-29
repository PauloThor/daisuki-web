import styled from "styled-components";
import { Color } from "./../../model/enums/theme-colors";
import { Link } from "react-router-dom";
import { BsCardList } from "react-icons/bs";
import { AiOutlineWechat } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

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

export const CommentTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  color: ${Color.TEXT_MAIN};
  padding-top: 20px;

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;

export const ContainerComment = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const UserPicture = styled.img`
  width: 48px;
  border-radius: 50%;
  margin-right: 8px;

  @media (max-width: 590px) {
    width: 36px;
  }
`;

export const CommentInput = styled.textarea`
  resize: none;
  height: 96px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  background-color: transparent;
  border: 2px solid ${Color.TEXT_MAIN};
  padding-bottom: 32px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #2a2a2a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Color.MAIN_DARK};

    &:hover {
      background-color: ${Color.MAIN};
    }
  }
`;

export const ButtonComment = styled.button`
  border: 0;
  width: 100px;
  height: 32px;
  color: ${Color.TEXT_MAIN};
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-weight: bolder;
  font-size: 18px;
  outline: none;
  background-color: ${Color.MAIN_LIGHT};
  transition: 300ms;
  margin-left: -96px;
  margin-top: 62px;
  z-index: +1;

  &:hover,
  &:focus {
    background-color: ${Color.MAIN};
  }
  @media (max-width: 590px) {
    margin-left: -93px;
  }

  @media (max-width: 425px) {
    margin-left: -90px;
    font-size: 16px;
  }

  @media (max-width: 375px) {
    margin-left: -87px;
  }
`;

export const OptionsComment = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const ArrowDropDown = styled(RiArrowDropDownLine)`
  color: ${Color.TEXT_MAIN};
  font-size: 30px;
  margin-bottom: -10px;
`;

export const ButtonShowMore = styled.button`
  width: 100%;
  background: transparent;
  border: 1px solid ${Color.TEXT_SECONDARY};
  border-radius: 14px;
  padding: 10px;
  font-size: 16px;
  color: ${Color.TEXT_SECONDARY};

  &:disabled {
    display: none;
  }
`;

export const BoxLogin = styled.div`
  height: 96px;
  width: 100%;
  border-radius: 8px;
  background-color: transparent;
  border: 2px solid ${Color.TEXT_MAIN};
  color: ${Color.TEXT_MAIN};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 425px) {
    font-size: 16px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

export const ButtonLogin = styled.button`
  width: 98px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${Color.HIGHLIGHT_DARK};
  outline: none;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: 0.3s;
  margin-top: 10px;

  &:hover,
  &:focus {
    background-color: ${Color.HIGHLIGHT};
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const NoComment = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
`;

export const OrderBy = styled.span`
  cursor: pointer;
`;
