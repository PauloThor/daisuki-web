import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
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
import { useUser } from "../../hooks/User";

interface DropdownItemProps {
  title: string;
  items?: SubItem[];
  hasAvatar?: boolean;
}

const DropdownItem = ({ title, items, hasAvatar }: DropdownItemProps) => {
  const { user } = useUser();
  const menu = (
    <Menu style={hasAvatar ? { ...MenuStyles, ...avatarStyles } : MenuStyles}>
      {items?.map((item, index) => (
        <StyledMenuSubItem key={`${item.name}-${index}`}>
          {!item.event ? (
            <Link to={item.path ?? ""}>{item.name}</Link>
          ) : (
            <label onClick={item.event}>{item.name}</label>
          )}
        </StyledMenuSubItem>
      ))}
    </Menu>
  );

  return (
    <MenuContainer>
      <Dropdown overlay={menu}>
        <MenuItem>
          {!hasAvatar ? (
            <MenuLabel>{title}</MenuLabel>
          ) : (
            <img src={user?.avatarUrl ?? DefaultAvatar} alt="avatar" />
          )}
        </MenuItem>
      </Dropdown>
    </MenuContainer>
  );
};

export default DropdownItem;
