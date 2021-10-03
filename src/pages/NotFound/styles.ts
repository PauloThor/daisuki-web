import { Font } from "../../model/enums/theme-fonts";
import { Color } from "../../model/enums/theme-colors";
import styled from "styled-components";

export const FullContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1170px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding-top: 2rem;
  }
`;

export const TextWrapper = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (min-width: 768px) {
    height: 40%;
  }

  @media (min-width: 1024px) {
    height: 20%;
    justify-content: flex-start;
    padding-left: 1rem;
  }
`;

export const TextContainer = styled.div`
  font-size: 1rem;
  text-align: center;
  p,
  a {
    font-family: ${Font.SECONDARY};
  }
  a {
    color: ${Color.HIGHLIGHT_LIGHT};
    transition: 0.3 ease-in-out;

    &:hover,
    &:focus {
      color: ${Color.HIGHLIGHT};
    }
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const AnimationWrapper = styled.div`
  height: 50%;
  position: relative;
  p {
    font-size: clamp(134px, 40vw, 541px);
    font-family: ${Font.SECONDARY};
    text-align: center;

    @media (min-width: 1024px) {
      line-height: 0.8;
    }
  }

  @media (min-width: 768px) {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const LottieWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -50px;
  right: 0;

  @media (min-width: 768px) {
    height: 600px;
    width: 600px;
    bottom: -100px;
  }

  @media (min-width: 1024px) {
    height: 740px;
    width: 740px;
    right: 120px;
  }
`;
