import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import sasuke from "../../assets/lottie/sasuke.json"
import {FullContainer, TextWrapper, TextContainer, AnimationWrapper, LottieWrapper} from "./styles"

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
    <FullContainer>
        <TextWrapper>
        <TextContainer>
            <p>Ahn? Esse não é o caminho certo.</p>
            <Link to="/">Vamos voltar~</Link>
        </TextContainer>
        </TextWrapper>
        <AnimationWrapper>
            <LottieWrapper>
                <Lottie options={defaultOptions}/>
            </LottieWrapper>
        </AnimationWrapper>
    </FullContainer>
        )
}

export default NotFound;