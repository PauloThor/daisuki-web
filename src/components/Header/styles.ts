import { Color } from "./../../model/enums/theme-colors";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  background-color: ${Color.MAIN_LIGHT};
  height: 78px;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  position: fixed;
  justify-content: space-between;

  form {
    display: none;

    @media (min-width: 768px) {
      display: initial;
    }
  }
`;

export const ProfileLink = styled(Link)`
  color: ${Color.TEXT_MAIN};
  font-size: 16px;

  &:hover {
    color: ${Color.HIGHLIGHT_DARK};
  }
`;

export const Divider = styled.div`
  height: 30px;
  border-left: 1px solid ${Color.TEXT_MAIN};
  margin: 0 20px 0 24px;
`;

export const HeaderItem = styled.div`
  align-items: center;
  padding: 0 15px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MenuMobileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
`;
