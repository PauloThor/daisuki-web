import { Font } from "./../model/enums/theme-fonts";
import { Color } from "./../model/enums/theme-colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, p, ul, li, header, footer, main, section, aside, form, nav, input, button, figure, figcaption, a, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
    }

    :root {
    }

    body {
        background-color: ${Color.MAIN_DARK};
        color: ${Color.TEXT_MAIN};
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

`;
