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
