import styled from "styled-components";
import { Modal, Comment } from "antd";
import { Color } from "../../model/enums/theme-colors";

export const StyledModal = styled(Modal)`
  .ant-modal-body {
    background-color: ${Color.MAIN};
    height: 60vh;
  }

  .ant-modal-footer {
    display: none;
  }
`;

export const FormStyled = styled.form``;

export const ButtonStyled = styled.button``;

export const BoxMessages = styled.div``;

export const MessageSentStyled = styled(Comment)`
  background-color: ${Color.SECONDARY};
  border-radius: 5px;

  .ant-comment-inner {
    flex-direction: row-reverse;
  }
`;

export const MessageReceivedStyled = styled(Comment)`
  background-color: ${Color.MAIN_LIGHT};
  border-radius: 5px;
`;
