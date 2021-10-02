import { Color } from "./../../model/enums/theme-colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: ${Color.MAIN};
  height: 78px;
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
`;
