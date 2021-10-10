import { Color } from "./../../model/enums/theme-colors";
import styled from "styled-components";
import { Font } from "../../model/enums/theme-fonts";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "antd";

export const Container = styled.div`
  background-color: ${Color.MAIN_DARK};
  width: 100vw;
  height: 100vh;
  max-width: 401px;
  border-radius: 8px;
  position: relative;

  @media (min-width: 400px) {
    max-height: 571px;
  }
`;

export const Banner = styled.header`
  background-color: ${Color.MAIN};
  height: 124px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AvatarContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  img {
    max-width: 96px;
    max-height: 96px;
  }
`;

export const Options = styled.section`
  margin: 10px 0px;

  p {
    background-color: ${Color.MAIN};
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.3s ease-in;

    &:hover,
    focus {
      color: ${Color.HIGHLIGHT_LIGHT};
    }
  }
  p:nth-child(2n),
  p:last-child {
    background-color: transparent;
  }

  p:last-child {
    color: red;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Text = styled.div`
  font-family: ${Font.SECONDARY};
  font-size: 18px;
  padding: 20px;
  text-align: center;

  span {
    color: ${Color.HIGHLIGHT_LIGHT};
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  color: ${Color.TEXT_MAIN};
  transition: 0.3s;

  &:hover {
    color: ${Color.HIGHLIGHT_LIGHT};
  }
`;

export const StyledModal = styled(Modal)`
  .ant-modal-footer {
    display: none;
  }

  .ant-modal-content {
    max-height: 0;
    display: flex;
    justify-content: center;
  }
`;
