import { ReactNode } from "react";
import { CarouselStyled } from "./styles";

interface Props {
  children: ReactNode;
}

const Carousel = ({ children }: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
      slidesToSlide: 5,
    },
    largeTablet: {
      breakpoint: { max: 1300, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <CarouselStyled
      responsive={responsive}
      infinite
      removeArrowOnDeviceType={["tablet", "mobile"]}
      keyBoardControl
    >
      {children}
    </CarouselStyled>
  );
};

export default Carousel;
