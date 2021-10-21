import styled from "styled-components";
import { Modal, Comment } from "antd";
import { Color } from "../../model/enums/theme-colors";
import { IoIosNotifications } from "react-icons/io";

export const StyledModal = styled(Modal)`
  .ant-modal-body {
    background-color: ${Color.MAIN};
    height: 65vh;
  }

  .ant-modal-header {
    background-color: ${Color.HIGHLIGHT_DARK};
  }
  .ant-modal-title {
    color: ${Color.TEXT_MAIN};
  }

  .ant-modal-footer {
    display: none;
  }

  @media (min-width: 768px) {
    .ant-modal-body {
      height: 60vh;
    }
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: space-between;
`;

export const ButtonStyled = styled.button`
  font-size: 0px;
  position: fixed;
  left: 15px;
  bottom: 40px;
  z-index: 1;
  background-color: transparent;
  border: none;

  @media (min-width: 768px) {
    @keyframes jump {
      to {
        transform: translateY(-10px);
      }
    }

    animation: jump 0.5s infinite alternate-reverse;
  }
`;

export const BoxMessages = styled.div`
  overflow-y: auto;

  height: 80%;
  &::-webkit-scrollbar {
    width: 4px;
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

  @media (min-width: 768px) {
    height: 90%;
  }
`;

export const InputArea = styled.div`
  height: 70px;
  display: flex;
`;

export const MessageSentStyled = styled(Comment)`
  background-color: ${Color.TEXT_SECONDARY};

  border-radius: 5px;

  margin: 10px 0px;

  .ant-comment-inner {
    flex-direction: row-reverse;
    padding: 16px;
  }

  .ant-comment-content-author-name {
    font-size: 16px;
    color: ${Color.HIGHLIGHT};
  }

  .ant-comment-content-author-time {
    color: ${Color.MAIN_DARK};
  }
  .ant-comment-content-detail {
    color: ${Color.MAIN_DARK};
  }

  img {
    width: 48px;
    height: 48px;
  }
`;

export const MessageReceivedStyled = styled(Comment)`
  background-color: ${Color.HIGHLIGHT};

  border-radius: 5px;
  margin: 5px;

  border-radius: 5px;

  margin: 10px 0px;

  .ant-comment-inner {
    padding: 16px;
  }

  .ant-comment-content-author-name {
    font-size: 16px;
    color: ${Color.TEXT_SECONDARY};
  }

  .ant-comment-content-author-time {
    color: ${Color.MAIN_DARK};
  }

  .ant-comment-content-detail {
    color: ${Color.TEXT_MAIN};
  }

  img {
    width: 48px;
    height: 48px;
  }
`;

export const Notification = styled(IoIosNotifications)`
  position: absolute;
  top: 0px;
  right: -10px;
  color: ${Color.TEXT_MAIN};

  animation: shake 1s infinite;
}

@keyframes shake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  20%,
  60% {
    transform: rotate(6deg);
  }
  40%,
  80% {
    transform: rotate(-6deg);
  }
`;
