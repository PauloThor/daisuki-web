import {
  OptionContainer,
  Options,
  ButtonStyle,
  PopDrop,
  DropDown,
} from "./style";
import { useState } from "react";

const OptionsMenu = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visible: React.SetStateAction<boolean>) => {
    setVisible(visible);
  };

  const handleDeleteComment = () => {
    setVisible(false);
  };

  return (
    <OptionContainer>
      <PopDrop
        content={<DropDown onClick={handleDeleteComment}>Excluir</DropDown>}
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <ButtonStyle type="link">
          <Options />
        </ButtonStyle>
      </PopDrop>
    </OptionContainer>
  );
};

export default OptionsMenu;
