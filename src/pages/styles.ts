import { Color } from "./../model/enums/theme-colors";
import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  background-color: ${Color.MAIN};
  padding: 10px;
  margin: 1rem;
  border-radius: 10px;
`;

export const Subtitle = styled.p`
  color: ${Color.TEXT_SECONDARY};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  text-align: right;
`;

export const Link = styled.a`
  font-weight: 700;
  cursor: pointer;
`;
