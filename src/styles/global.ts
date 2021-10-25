import { Font } from "./../model/enums/theme-fonts";
import { Color } from "./../model/enums/theme-colors";
import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";
import "react-multi-carousel/lib/styles.css";

export const GlobalStyle = createGlobalStyle`
    html, body, div, p, ul, li, header, footer, main, section, aside, form, nav, input, button, figure, figcaption, a, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
    }

    body {
        background-color: ${Color.MAIN_DARK};
        color: ${Color.TEXT_MAIN};

        &::-webkit-scrollbar {
            width: 16px;
        }

        &::-webkit-scrollbar-track {
            background-color: #2a2a2a;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${Color.MAIN_DARK};

            &:hover {
                background-color: ${Color.MAIN};
            }
        }

    }

    body, button, a {
        font-family: ${Font.MAIN};
    }

    button {
        cursor: pointer;
    }

    input, a {
        outline: none;
    }

    .ant-spin-dot-item {
        background-color: ${Color.HIGHLIGHT_DARK};
    }

    .ant-popover-inner {
        background-color: ${Color.MAIN};
    }

    .ant-popover-inner-content {
        color: ${Color.TEXT_MAIN};
        cursor: pointer;

        &:hover,
        &:focus {
        background-color: ${Color.MAIN_LIGHT};
        transition: 300ms;
        }
        .anticon svg {
            display: none;
        }
    }

    .ant-popover-arrow {
        display: none;
    }
  .ant-popover-arrow-content {
    background: ${Color.MAIN};
  }

  .ant-popover-inner-content {
    background: ${Color.MAIN};
  
    .anticon svg {
      display: none;
  }
  }

    .ant-popover-buttons {
        display: flex;
        justify-content: center;
    }

    .ant-popover-message-title {
      color: ${Color.TEXT_MAIN};
      padding: 0;
      text-align: center;
      font-size: 16px;
    }

    .ant-btn-sm {
      width: 80px;
      height: 44px;
      margin: 0;
      background-color: ${Color.HIGHLIGHT_DARK};
      color: ${Color.TEXT_MAIN};
      border: none;
      font-size: 18px;
      font-weight: 700;

      &:hover {
        background-color: ${Color.HIGHLIGHT_DARK};
          color: ${Color.TEXT_MAIN};
          opacity: 0.8;
      }
    }

    .ant-popover-buttons button {
      margin: 0;
    }

    .ant-btn-primary {
      background-color: ${Color.SECONDARY};
      color: ${Color.MAIN_DARK};

      &:hover {
          background-color: ${Color.SECONDARY};
          color: ${Color.MAIN_DARK};
      }
    }

  .ant-modal-wrap {
    z-index: 1002 ;
  }

`;
