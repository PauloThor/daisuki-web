import styled from "styled-components";
import { Font } from "../../model/enums/theme-fonts";
import { Color } from "../../model/enums/theme-colors";
import footerImg from "../../assets/img/footer.png";

export const Banner = styled.div`
  background-color: ${Color.MAIN};

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Text = styled.div`
  font-family: ${Font.SECONDARY};
  font-size: 18px;
  padding: 20px;
  text-align: center;

  span {
    color: ${Color.HIGHLIGHT_LIGHT};
  }

  @media (min-width: 768px) {
    font-size: 32px;
    padding: 40px 20px;
  }

  @media (min-width: 768px) {
    p {
      max-width: 400px;
    }
  }
`;

export const Image = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: initial;
    margin-left: 70px;
  }
`;

export const Main = styled.main`
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  color: ${Color.TEXT_MAIN};
  font-weight: 700;
  margin: 16px 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin: 24px 0;
  }
`;

export const Section = styled.section`
  text-align: center;
`;

export const ReleasesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto 8px;

  @media (min-width: 768px) {
    margin: 0 auto 16px;
  }

  li {
    margin: 0 4px 8px;
  }
`;

export const Footer = styled.footer`
  border-top: 2px solid ${Color.MAIN_LIGHT};
  padding: 0 10px 8px;
  div:first-child {
    max-width: 1170px;
    margin: 0 auto;
    position: relative;
    > p {
      font-size: 0.875rem;
      font-weight: 700;
      color: ${Color.HIGHLIGHT};
      padding: 16px 14px 0;
    }
  }

  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const Developers = styled.div`
  text-align: center;
  margin-top: 24px;

  p {
    font-size: 0.75rem;
    font-weight: 700;

    &:last-child {
      font-size: 0.625rem;
    }
  }

  a {
    display: inline-block;
    margin: 0 6px;

    @media (min-width: 768px) {
      margin: 0 12px;
    }

    img {
      height: 48px;
      width: 48px;
      object-fit: cover;

      @media (min-width: 768px) {
        height: 64px;
        width: 64px;
      }
    }
  }

  div {
    margin: 16px 0 32px;
  }
`;

export const FooterImg = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    height: 100%;
    width: 200px;
    background: url(${footerImg}) no-repeat center;
    background-size: contain;
    position: absolute;
    right: 0;
    bottom: -8px;
  }
`;

export const SpinContainer = styled.div`
  display: grid;
  place-items: center;
  height: 40vh;
`;
