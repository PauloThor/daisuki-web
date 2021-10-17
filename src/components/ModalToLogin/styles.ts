import styled from "styled-components";
import { Modal } from "antd";
import { Color } from "../../model/enums/theme-colors";

export const Content = styled.div`
  overflow: auto;
  max-height: 40vh;

  p {
    color: white;
    font-size: 1rem;
  }

  div {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    gap: 1rem;

    button {
      background: ${Color.MAIN_LIGHT};
      color: white;
    }
    button + button {
      background-color: ${Color.HIGHLIGHT_DARK};
    }
  }
`;

export const StyledModal = styled(Modal)`
  max-width: 90vw;

  @media (min-width: 768px) {
    max-width: 25rem;
  }
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
