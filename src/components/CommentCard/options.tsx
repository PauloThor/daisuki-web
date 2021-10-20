import {
  OptionContainer,
  Options,
  ButtonStyle,
  PopDrop,
  DropDown,
} from "./style";
import { useState } from "react";

interface Props {
  handleDelete: () => void;
}

const OptionsMenu = ({ handleDelete }: Props) => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visible: React.SetStateAction<boolean>) => {
    setVisible(visible);
  };

  const handleDeleteComment = () => {
    setVisible(false);
    handleDelete();
  };

  return (
    <OptionContainer>
      <PopDrop
        content={<DropDown onClick={handleDeleteComment}>Excluir</DropDown>}
        trigger="click"
        visible={visible}
        placement="bottom"
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
