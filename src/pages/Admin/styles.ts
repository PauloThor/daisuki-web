import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";
import { Checkbox, Select } from "antd";

export const Container = styled.div`
  width: 100vw;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 90%;
  height: auto;
  background-color: ${Color.MAIN};
  padding: 25px;
  border-radius: 10px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CheckboxStyled = styled(Checkbox)`
  width: 100%;
`;

export const SelectStyled = styled(Select)`
  width: 100%;
`;
