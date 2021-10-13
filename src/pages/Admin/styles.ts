import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";
import { Checkbox, Select } from "antd";

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