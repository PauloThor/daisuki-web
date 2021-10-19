import styled, { keyframes } from "styled-components";
import killua from "../../assets/img/killua.png";
import gon from "../../assets/img/gon.webp";
import { Color } from "../../model/enums/theme-colors";

const slideRight = keyframes`
    to {
        left: 0;
    }
`;

const slideLeft = keyframes`
    to {
        right: 0;
    }
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
  background-color: ${Color.TEXT_MAIN};
  overflow: hidden;
`;

export const Form = styled.form`
  background-color: ${Color.MAIN};
  padding: 16px;
  border-radius: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    width: 350px;
  }
`;
export const BgLeft = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: initial;
    height: 435px;
    width: 164px;
    background: url(${killua}) no-repeat;
    position: absolute;
    left: -164px;
    bottom: 0;
    animation: ${slideRight} 1s forwards;
  }
`;

export const BgRight = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: initial;
    height: 435px;
    width: 164px;
    background: url(${gon}) no-repeat;
    position: absolute;
    right: -164px;
    bottom: 0;
    animation: ${slideLeft} 1s forwards 1s;
  }
`;
