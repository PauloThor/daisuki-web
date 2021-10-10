import { Color } from "./../../model/enums/theme-colors";
import styled from "styled-components";
import { Menu } from "antd";

export const MenuContainer = styled.div`
  padding: 10px;

  img {
    max-width: 75px;
    max-height: 75px;
  }

  @media (max-width: 350px) {
    img {
      max-width: 65px;
      max-height: 65px;
    }
    padding: 5px;
  }
`;

export const MenuStyles = {
  backgroundColor: Color.MAIN_LIGHT,
  borderRadius: "8px",
};

export const avatarStyles = {
  top: "20px",
  right: "20px",
};

export const StyledMenuSubItem = styled(Menu.Item)`
  background-color: ${Color.MAIN_LIGHT};
  color: ${Color.TEXT_MAIN};

  label {
    cursor: pointer;
  }

  &:hover {
    background-color: ${Color.MAIN_LIGHT};
    color: ${Color.HIGHLIGHT_DARK};
  }
`;

export const MenuItem = styled.a`
  color: ${Color.TEXT_MAIN};

  &:hover {
    color: ${Color.TEXT_SECONDARY};
  }

  @media (max-width: 350px) {
    padding: 5px;
  }
`;

export const MenuLabel = styled.label`
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: ${Color.HIGHLIGHT_DARK};
  }
`;
