import styled from "styled-components";
import { Modal } from "antd";
import { Color } from "../../model/enums/theme-colors";

export const Content = styled.p`
  color: white;
  overflow: auto;
  max-height: 40vh;
  font-size: 1rem;
`;

export const StyledModal = styled(Modal)`
  svg {
    color: white;
  }
  .ant-modal-header {
    background-color: ${Color.MAIN};

    .ant-modal-title {
      color: ${Color.TEXT_MAIN};
    }
  }

  .ant-modal-body {
    background-color: ${Color.MAIN};
  }

  .ant-modal-footer {
    display: none;
  }
`;
