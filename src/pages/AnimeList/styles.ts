import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";

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

export const NoData = styled.div`
  font-size: 2rem;
`;
