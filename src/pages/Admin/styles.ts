import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";
import { Checkbox, Select } from "antd";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 15px 0px 15px 0px;
    color: ${Color.TEXT_MAIN};
  }

  button {
    margin: 15px 0px 10px 0px;
  }
`;

export const Box = styled.div`
  width: 90%;
  background-color: ${Color.MAIN};
  padding: 25px;
  border-radius: 10px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;

  input[name="sinopse"] {
    height: 100px;
  }

  * {
    margin-bottom: 5px;
  }
`;

export const AnimeOptionsStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const CheckboxStyled = styled(Checkbox)`
  align-items: center;
  font-size: 16px;
  color: ${Color.TEXT_MAIN};
`;

export const SelectStyled = styled(Select)`
  width: 100%;
`;
