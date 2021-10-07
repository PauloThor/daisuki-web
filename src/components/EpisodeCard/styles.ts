import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const StyledLink = styled(Link)`
    position: relative;

    img {
        width: 290px;
        height: 150px;
        object-fit: cover;

        @media (min-width: 768px) {
        width: 300px;
        height: 160px;
        }
    }

    div {
        position: absolute;
        bottom: 0;
        padding: 4px 0;
        background-color: rgba(26, 26, 26, 0.9);
        text-align: center;
    }
`