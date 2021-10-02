import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import {
  MenuContainer,
  MenuItem,
  MenuLabel,
  MenuStyles,
  StyledMenuSubItem,
} from "./styles";
import { SubItem } from "../../model/menu-item";

interface DropdownItemProps {
  title: string;
  items?: SubItem[];
}

const DropdownItem = ({ title, items }: DropdownItemProps) => {
  const menu = (
    <Menu style={MenuStyles}>
      {items?.map((item, index) => (
        <StyledMenuSubItem key={`${item.name}-${index}`}>
          <a target="_blank" rel="noopener noreferrer" href={item.path}>
            {item.name}
          </a>
        </StyledMenuSubItem>
      ))}
    </Menu>
  );

  return (
    <MenuContainer>
      <Dropdown overlay={menu}>
        <MenuItem onClick={(e) => e.preventDefault()} href="/">
          <MenuLabel>{title}</MenuLabel>
        </MenuItem>
      </Dropdown>
    </MenuContainer>
  );
};

export default DropdownItem;
