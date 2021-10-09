import { Menu, Dropdown } from "antd";
import {
  MenuContainer,
  MenuItem,
  MenuLabel,
  MenuStyles,
  StyledMenuSubItem,
} from "./styles";
import { SubItem } from "../../model/menu-item";
import mock from "../../assets/img/avatar-laiane.png";

interface DropdownItemProps {
  title: string;
  items?: SubItem[];
  hasAvatar?: boolean;
}

const DropdownItem = ({ title, items, hasAvatar }: DropdownItemProps) => {
  const menu = (
    <Menu style={MenuStyles}>
      {items?.map((item, index) => (
        <StyledMenuSubItem key={`${item.name}-${index}`}>
          <a rel="noopener noreferrer" href={item.path}>
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
          {!hasAvatar ? (
            <MenuLabel>{title}</MenuLabel>
          ) : (
            <img src={mock} alt="avatar" />
          )}
        </MenuItem>
      </Dropdown>
    </MenuContainer>
  );
};

export default DropdownItem;
