import styled from "styled-components";
import { Color } from "./../../model/enums/theme-colors";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button, Popover } from "antd";

interface CommentProp {
  visible?: boolean;
  image?: string;
}

export const OptionContainer = styled.div`
  position: absolute;
  top: 14px;
  right: 30px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 24px;
  position: relative;
  display: flex;

  /* &:hover,
  &:focus ${OptionContainer} {
    display: initial;
  } */
`;

export const Content = styled.div<CommentProp>`
  width: calc(${({ visible }) => visible && "100% - 140px"});

  @media (max-width: 550px) {
    width: ${({ visible }) => visible && "70%"};
  }
`;

export const ProfilePicture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 14px;

  @media (max-width: 590px) {
    width: 36px;
    height: 36px;
  }
`;

export const UserName = styled.span`
  font-size: 16px;
  color: ${Color.HIGHLIGHT_LIGHT};
  margin-right: 8px;
  line-height: 16px;

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const TimeLapsed = styled.span`
  font-size: 12px;
  color: ${Color.TEXT_SECONDARY};
  line-height: 16px;
`;

export const Text = styled.p`
  font-size: 16px;
  padding-top: 5px;
  color: ${Color.TEXT_MAIN};
  word-break: break-word;

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const Options = styled(BsThreeDotsVertical)`
  width: 24px;
  height: 24px;
  color: ${Color.HIGHLIGHT_LIGHT};
`;

export const DropDown = styled.a`
  color: ${Color.TEXT_MAIN};

  &:hover,
  &:focus {
    color: ${Color.TEXT_MAIN};
  }
`;

export const ButtonStyle = styled(Button)``;

export const PopDrop = styled(Popover)``;
