import { Menu, Dropdown } from "antd";
import {
  avatarStyles,
  MenuContainer,
  MenuItem,
  MenuLabel,
  MenuStyles,
  StyledMenuSubItem,
} from "./styles";
import { SubItem } from "../../model/menu-item";
import DefaultAvatar from "../../assets/img/default-user-avatar.png";

interface DropdownItemProps {
  title: string;
  items?: SubItem[];
  hasAvatar?: boolean;
}

const DropdownItem = ({ title, items, hasAvatar }: DropdownItemProps) => {
  const menu = (
    <Menu style={hasAvatar ? { ...MenuStyles, ...avatarStyles } : MenuStyles}>
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
            <img src={DefaultAvatar} alt="avatar" />
          )}
        </MenuItem>
      </Dropdown>
    </MenuContainer>
  );
};

export default DropdownItem;
