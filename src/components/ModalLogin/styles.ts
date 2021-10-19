import styled from "styled-components";
import { Modal } from "antd";
import { Color } from "../../model/enums/theme-colors";
import { Link } from "react-router-dom";

export const StyledModal = styled(Modal)`
  max-width: 90vw;
  max-width: 19rem;

  @media (min-width: 768px) {
    max-width: 25rem;
  }
  svg {
    color: white;
  }
  .ant-modal-content {
    background-color: transparent;
  }
  .ant-modal-header {
    background-color: ${Color.MAIN};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    .ant-modal-title {
      color: ${Color.TEXT_MAIN};
    }
  }

  .ant-modal-body {
    background-color: ${Color.MAIN};
    padding: 1rem;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .ant-modal-footer {
    display: none;
  }
`;

export const Container = styled.div`
  overflow: auto;
  max-height: 60vh;
  display: flex;
  flex-direction: column;

  p {
    color: white;
    font-size: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  background-color: ${Color.MAIN};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const Subtitle = styled.p`
  width: 100%;
  color: ${Color.TEXT_SECONDARY};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  text-align: right;
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  color: ${Color.TEXT_SECONDARY};

  &:hover,
  &:focus {
    color: ${Color.TEXT_MAIN};
    transition: 0.5s;
  }
`;

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;

  span {
    font-size: 0.9rem;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 16rem;

  @media (min-width: 768px) {
    width: auto;
  }

  button {
    background: ${Color.MAIN_LIGHT};
    color: white;
  }
  button + button {
    background-color: ${Color.HIGHLIGHT_DARK};
  }
`;
