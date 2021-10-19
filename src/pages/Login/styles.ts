import { Link } from "react-router-dom";
import { Modal } from "antd";
import { Color } from "../../model/enums/theme-colors";
import styled from "styled-components";

export const FullContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 4px 10px 0;

  @media (min-width: 768px) {
    padding: 8px 30px 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: start;
  }

  @media (min-width: 1980px) {
    padding-left: 100px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-grow: 1;
`;

export const LottieContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: initial;
    align-self: flex-end;
    margin-bottom: -10px;

    svg {
      width: 250px;
      height: 250px;
    }
  }

  @media (min-width: 1136px) {
    svg {
      width: 500px;
      height: 500px;
    }
  }
`;

export const FormContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
`;

export const Form = styled.form`
  background-color: ${Color.MAIN};
  padding: 16px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 300px;

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

export const StyledButton = styled.button`
  font-weight: 700;
  color: ${Color.TEXT_SECONDARY};
  border: none;
  background-color: transparent;

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

export const StyledModal = styled(Modal)`
  color: ${Color.TEXT_MAIN};
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ant-modal-body {
    background-color: ${Color.MAIN};
  }

  .ant-modal-header {
    background-color: ${Color.MAIN_DARK};
  }

  .ant-modal-footer {
    display: none;
  }

  .ant-modal-header {
    border: none;
  }
  .ant-modal-title,
  .ant-modal-close {
    color: ${Color.TEXT_MAIN};
  }
`;
