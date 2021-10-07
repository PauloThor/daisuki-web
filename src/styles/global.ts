import { Font } from "./../model/enums/theme-fonts";
import { Color } from "./../model/enums/theme-colors";
import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

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
            width: 8px;
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

    .ant-dropdown-menu {
        background-color: transparent;
    }

    .ant-spin-dot-item {
    background-color: ${Color.HIGHLIGHT_DARK};
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
        
    }

    ::-webkit-scrollbar {
            width: 10px;
        }

    ::-webkit-scrollbar-track {
            background-color: #2a2a2a;
        } 

    ::-webkit-scrollbar-thumb {
        background-color: ${Color.MAIN_LIGHT};

        &:hover {
            background-color: ${Color.MAIN};
        }
    } 
`;
