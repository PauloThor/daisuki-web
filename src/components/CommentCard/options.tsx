import { OptionContainer, Options } from "./style";
import { useState } from "react";
import { Popover, Button } from "antd";

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
      <Popover
        content={<a onClick={handleDeleteComment}>Excluir</a>}
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <Button type="link">
          <Options />
        </Button>
      </Popover>
    </OptionContainer>
  );
};

export default OptionsMenu;
