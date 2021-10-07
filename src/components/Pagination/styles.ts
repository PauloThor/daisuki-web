import styled from "styled-components";
import { Pagination } from "antd";
import { Color } from "../../model/enums/theme-colors";

export const PaginationStyled = styled(Pagination)`
  li {
    background-color: transparent;
    border-color: ${Color.TEXT_MAIN};
    a {
      color: ${Color.TEXT_MAIN};
    }

    .ant-pagination-item-link {
      background-color: transparent;
      color: ${Color.TEXT_MAIN};

      &:disabled {
        color: #2e2e2e;
      }
    }

    &:hover,
    &:focus {
      border-color: ${Color.HIGHLIGHT};
      a {
        color: ${Color.HIGHLIGHT};
      }
      .ant-pagination-item-link:not(:disabled) {
        color: ${Color.HIGHLIGHT};
        border-color: ${Color.HIGHLIGHT};
      }
    }

    &.ant-pagination-item-active {
      border-color: ${Color.HIGHLIGHT};
      a {
        color: ${Color.HIGHLIGHT};
      }
    }
  }
`;
