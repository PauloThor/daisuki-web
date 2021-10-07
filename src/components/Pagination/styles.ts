import styled from "styled-components";
import { Pagination } from "antd";
import { Color } from "../../model/enums/theme-colors";

export const PaginationStyled = styled(Pagination)`
  .ant-pagination-options {
    display: none;
  }
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
        border-color: #2e2e2e;
        color: #2e2e2e;
      }
      .ant-pagination-item-ellipsis {
        color: ${Color.TEXT_MAIN};
      }
      .ant-pagination-item-container {
        svg {
          color: ${Color.HIGHLIGHT};
        }
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
