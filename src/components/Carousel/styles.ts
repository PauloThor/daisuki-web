import Carousel from "react-multi-carousel";
import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";

export const CarouselStyled = styled(Carousel)`
  padding: 0 10px;
  max-width: 1200px;
  margin: 0 auto;

  .react-multiple-carousel__arrow {
    background-color: rgba(13, 7, 13, 0.8);
    border-radius: 8px;
    transform: scale(0);
    transform-origin: center right;
    transition: all 0.3;
    &::before {
      font-size: 48px;
      color: ${Color.TEXT_MAIN};
    }

    &:hover::before {
      color: ${Color.TEXT_SECONDARY};
    }
  }

  .react-multiple-carousel__arrow--right {
    right: calc(2% + 1px);
  }

  .react-multiple-carousel__arrow--left {
    left: calc(2% + 1px);
  }

  &:hover,
  &:focus {
    .react-multiple-carousel__arrow {
      transform: scale(1);
    }
  }
`;
