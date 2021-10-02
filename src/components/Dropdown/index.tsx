import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  MenuContainer,
  MenuItem,
  MenuStyles,
  StyledMenuSubItem,
} from "./styles";

interface DropdownItemProps {
  title: string;
  items?: string[];
}

const DropdownItem = ({ title }: DropdownItemProps) => {
  const menu = (
    <Menu style={MenuStyles}>
      <StyledMenuSubItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </StyledMenuSubItem>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  return (
    <MenuContainer>
      <Dropdown overlay={menu}>
        <MenuItem
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          href="/"
        >
          {title}
        </MenuItem>
      </Dropdown>
    </MenuContainer>
  );
};

export default DropdownItem;
