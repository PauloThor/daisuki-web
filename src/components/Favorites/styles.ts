import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";
import { GiBrokenHeart } from "react-icons/gi";
import { Popconfirm } from "antd";

export const Container = styled.div``;

export const Options = styled.section`
  margin: 10px 0px;
`;

export const Item = styled.div`
  display: flex;
  background-color: ${Color.MAIN};
  padding: 5px;
  cursor: pointer;
  transition: 0.3s ease-in;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    transition: 0.5s;
  }

  &:hover,
  &:focus {
    color: ${Color.HIGHLIGHT_LIGHT};

    svg {
      opacity: 1;
    }
  }

  :nth-child(2n) {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    svg {
      opacity: 1;
    }
  }
`;

export const UnfavoriteIcon = styled(GiBrokenHeart)`
  color: ${Color.HIGHLIGHT_DARK};

  &:hover {
    color: ${Color.HIGHLIGHT};
  }
`;

export const Pop = styled(Popconfirm)`
  .ant-popover-buttons {
    display: flex;
    justify-content: center;
  }
`;
