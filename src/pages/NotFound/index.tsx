import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import sasuke from "../../assets/lottie/sasuke.json";
import {
  FullContainer,
  TextWrapper,
  TextContainer,
  AnimationWrapper,
  LottieWrapper,
} from "./styles";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sasuke,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Helmet>
        <title>Anime Daisuki! | Sasuke-kun!!</title>
      </Helmet>
      <FullContainer>
        <TextWrapper>
          <TextContainer>
            <p>Ahn? Esse não é o caminho certo.</p>
            <Link to="/">Vamos voltar~</Link>
          </TextContainer>
        </TextWrapper>
        <AnimationWrapper>
          <p>404</p>
          <LottieWrapper>
            <Lottie options={defaultOptions} />
          </LottieWrapper>
        </AnimationWrapper>
      </FullContainer>
    </>
  );
};

export default NotFound;
