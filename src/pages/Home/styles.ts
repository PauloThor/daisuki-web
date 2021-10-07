import styled from "styled-components";
import { Font } from "../../model/enums/theme-fonts";
import { Color } from "../../model/enums/theme-colors";

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

export const Main = styled.main``;

export const Title = styled.h2`
  font-size: 1.125rem;
  color: ${Color.TEXT_MAIN};
  font-weight: 700;
  text-align: center;
  margin: 16px 0;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin: 24px 0;

    &:first-child {
      margin: 16px 0 24px;
    }
  }
`;

export const ReleasesSection = styled.section`
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
