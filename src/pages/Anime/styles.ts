import styled from "styled-components";
import { Font } from "../../model/enums/theme-fonts";
import { Color } from "../../model/enums/theme-colors";

interface InfoAnimeProps {
  favIcon: string;
}

export const Container = styled.main`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;

export const InfoAnime = styled.div<InfoAnimeProps>`
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

  .container-data {
    display: flex;
    flex-direction: column;
    width: 100%;

    .header {
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
        background-image: url(${({ favIcon }) => favIcon});
        background-color: transparent;
        width: 25px;
        height: 25px;
        border: none;
        background-repeat: no-repeat;

        @media (min-width: 768px) {
          width: 35px;
          height: 35px;
          background-size: contain;
        }
      }
    }

    .rate-container {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .ant-rate {
        li {
          color: #a4ccf4;
        }
      }
    }

    .details {
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

        @media (min-width: 768px) {
          font-size: 1.1rem;
        }
      }

      .categories {
        display: none;
        gap: 1rem;
        margin-top: 15px;

        @media (min-width: 768px) {
          display: flex;
        }
      }

      .synopsis {
        max-height: 15rem;
        max-width: 65rem;
        margin-top: auto;
        overflow: auto;
        display: none;

        @media (min-width: 768px) {
          display: block;
        }
      }
    }
  }
  .container-image {
    display: flex;
    flex-direction: column;
    img {
      margin-bottom: 15px;
      width: 100%;

      @media (min-width: 768px) {
        margin-bottom: 0;
        width: 20rem;
        height: 30rem;
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
  }
`;

export const ListEpisodes = styled.ul`
  list-style: none;

  padding: 0 1rem;
  padding-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 15px;
    padding: 0 2rem;
    padding-bottom: 1.5rem;
  }

  li {
    background-color: ${Color.MAIN};
    height: 2.5rem;
    font-size: 1rem;
    padding: 1rem 0.5rem;

    display: flex;
    align-items: center;

    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    @media (min-width: 768px) {
      height: 3.5rem;
      padding: 1.5rem 1rem;
      font-size: 1.3rem;
    }
  }

  li + li {
    margin-top: 3px;
  }
`;

export const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Category = styled.div`
  padding: 0.5rem;
  height: 1.8rem;
  border: 1px solid ${Color.TEXT_MAIN};
  border-radius: 3px;
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
