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
    },
    smallDesktop: {
      breakpoint: { max: 1300, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
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
      autoPlay
      autoPlaySpeed={4000}
      keyBoardControl
      arrows={false}
    >
      {children}
    </CarouselStyled>
  );
};

export default Carousel;
