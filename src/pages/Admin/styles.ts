import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";
import { Checkbox, Select, Drawer, Popconfirm } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1170px;
  margin: 0 auto;

  h2 {
    margin: 16px 0 8px;
    color: ${Color.TEXT_MAIN};

    @media (min-width: 900px) {
      margin: 24px 0 8px;
    }
  }

  @media (min-width: 900px) {
    padding: 0 20px 8px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
  }
`;

export const Box = styled.div`
  width: 90%;
  max-width: 400px;

  @media (min-width: 900px) {
    width: 49%;
    max-width: 570px;
  }
`;

export const FormStyled = styled.form`
  background-color: ${Color.MAIN};
  padding: 16px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const CheckboxStyled = styled(Checkbox)`
  font-size: 1rem;
  color: ${Color.TEXT_MAIN};
  margin: 0.2rem 0;

  input[type="checkbox"]:not(:checked) ~ .ant-checkbox-inner {
    background-color: transparent;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${Color.HIGHLIGHT};
    border-color: ${Color.HIGHLIGHT};
  }

  &:hover,
  &:focus {
    .ant-checkbox-checked::after,
    .ant-checkbox-inner {
      border-color: ${Color.HIGHLIGHT_DARK};
    }
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${Color.HIGHLIGHT_DARK};
  }

  @media (min-width: 900px) {
    margin: 0.5rem 0;
  }
`;

export const SelectStyled = styled(Select)`
  width: 100%;
  margin: 0.2rem 0;

  @media (min-width: 900px) {
    margin: 0.5rem 0;
  }
`;

export const FormMod = styled.form`
  background-color: ${Color.MAIN};
  padding: 16px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;

    > label {
      max-width: 200px;
    }
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.2rem 0;

  @media (min-width: 900px) {
    margin: 0.5rem 0;
  }

  > label {
    width: 100%;
    font-size: 1rem;
  }

  > textarea {
    background-color: transparent;
    border-radius: 8px;
    outline: none;
    border-color: ${Color.MAIN_DARK};

    &::placeholder {
      color: ${Color.TEXT_MAIN};
      opacity: 0.7;
    }

    &:focus {
      border-color: ${Color.TEXT_SECONDARY};
    }

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-track {
      background-color: #2a2a2a;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${Color.MAIN_LIGHT};

      &:hover {
        background-color: ${Color.MAIN};
      }
    }
  }
`;

export const AddEpTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${Color.HIGHLIGHT};
    }
  }
`;

export const AddModButton = styled.button`
  width: 90%;
  max-width: 400px;
  font-size: 1.125rem;
  background-color: transparent;
  border: 1px solid ${Color.TEXT_SECONDARY};
  border-radius: 8px;
  padding: 10px 0;
  margin: 24px auto;
  transition: border-color 0.3s;

  @media (min-width: 900px) {
    font-size: 1.5rem;
    align-self: flex-end;
  }

  &:hover,
  &:focus {
    border-color: ${Color.HIGHLIGHT};
  }
`;

export const Modal = styled(Drawer)`
  .ant-drawer-content-wrapper {
    width: 100% !important;
    max-width: 400px;
  }
  .ant-drawer-header {
    background-color: ${Color.MAIN};

    .ant-drawer-title {
      font-size: 1.125rem;
    }

    .ant-drawer-title,
    .ant-drawer-close {
      color: ${Color.TEXT_MAIN};
    }
  }
  .ant-drawer-content {
    background-color: ${Color.MAIN_DARK};
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  svg {
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    transition: 0.3s;

    &:hover {
      color: ${Color.TEXT_SECONDARY};
    }
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

export const SpinContainer = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;

export const Pop = styled(Popconfirm)`
  .ant-popover-buttons {
    display: flex;
    justify-content: center;
  }
`;
