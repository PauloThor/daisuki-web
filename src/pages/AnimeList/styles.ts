import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";
import itachi from "../../assets/img/itachi.jpg";

export const Title = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  color: ${Color.TEXT_MAIN};
  text-align: center;
  margin: 16px 0 8px;

  @media (min-width: 768px) {
    margin: 24px 0 16px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
  li {
    margin: 4px;
  }
`;

export const SpinContainer = styled.div`
  display: grid;
  place-items: center;
  height: 60vh;
`;

export const NoData = styled.p`
  font-size: 1.5rem;
  padding: 30px;
  color: #ccc;

  @media (min-width: 768px) {
    flex-grow: 1;
    font-size: 5rem;
    background: url(${itachi}) no-repeat;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const FilterMenu = styled.nav`
  padding: 0 4px;

  label {
    font-size: 1rem;
    background-color: ${Color.MAIN};
    border-radius: 4px;
    display: block;
    padding: 8px 24px;
    max-width: fit-content;
    margin-bottom: 8px;
    margin-left: auto;
    transition: 0.3s;

    &:hover {
      background-color: ${Color.MAIN_LIGHT};
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  input {
    display: none;
  }

  input[type="checkbox"]:checked ~ ul {
    display: flex;
  }

  ul {
    display: none;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 6px 16px;

    @media (min-width: 768px) {
      display: flex;
      padding: 0 24px 16px;
    }

    li {
      margin: 2px;
    }
  }
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  background-color: ${Color.MAIN};
  border-radius: 4px;
  width: 46px;
  text-transform: uppercase;
  border: none;
  padding: 6px 0;
  transition: 0.3s;

  &:hover {
    background-color: ${Color.MAIN_LIGHT};
  }
`;
