import { Color } from "./../../model/enums/theme-colors";
import styled from "styled-components";
import { Menu } from "antd";

export const MenuContainer = styled.div`
  padding: 10px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    img {
      width: 64px;
      height: 64px;
    }
    padding: 5px;
  }
`;

export const MenuStyles = {
  backgroundColor: Color.MAIN_LIGHT,
  borderRadius: "8px",
};

export const avatarStyles = {
  top: "0px",
  left: "0px",
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

export const MenuItem = styled.div`
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
