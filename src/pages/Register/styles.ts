import { Color } from "../../model/enums/theme-colors";
import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  background-color: ${Color.MAIN};
  padding: 10px;
  margin: 1rem auto;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 295px;

  @media (min-width: 768px) {
    max-width: 350px;
  }
`;

export const Subtitle = styled.p`
  width: 100%;
  color: ${Color.TEXT_SECONDARY};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  text-align: right;
`;

export const Link = styled.a`
  font-weight: 700;
  cursor: pointer;
`;
