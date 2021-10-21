import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Tooltip } from "antd";
import InputEmoji from "react-input-emoji";
import {
  StyledModal,
  MessageSentStyled,
  MessageReceivedStyled,
  BoxMessages,
  FormStyled,
  ButtonStyled,
  InputArea,
} from "./styles";
import moment from "moment";
import { useUser } from "../../hooks/User";
import IconeChat from "../../assets/img/icone-chat.png";
import DefaultAvatar from "../../assets/img/default-user-avatar.png";

interface MessageInterface {
  msg: string;
  socketIdUser: string;
  name: string;
  avatarUrl: string;
}

const socket = io("https://daisuki-chat-back.herokuapp.com");

const Chat = () => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [socketId, setSocketId] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user } = useUser();

  const sendMessage = () => {
    if (inputMessage) {
      socket.emit(
        "chat message",
        [
          ...messages,
          {
            msg: inputMessage,
            socketIdUser: socketId,
            name: user.username,
            avatarUrl: user.avatarUrl,
          },
        ].slice(-10)
      );
      setInputMessage("");
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages(msg);
    });
  });

  useEffect(() => {
    socket.on("connect", () => {
      setSocketId(socket.id);
    });
  }, []);

  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <ButtonStyled onClick={showModal}>
        <img src={IconeChat} alt="Icone chat" />
      </ButtonStyled>
      <StyledModal
        title="Chat dos otaku"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <FormStyled>
          <BoxMessages>
            {messages.map((message, index) => {
              if (message.socketIdUser === socketId) {
                return (
                  <MessageSentStyled
                    author={message.name}
                    avatar={
                      <img
                        src={message.avatarUrl ?? DefaultAvatar}
                        alt="avatar"
                      />
                    }
                    content={<p>{message.msg}</p>}
                    datetime={
                      <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                        <span>{moment().fromNow()}</span>
                      </Tooltip>
                    }
                    key={index}
                  />
                );
              }
              return (
                <MessageReceivedStyled
                  author={message.name}
                  avatar={
                    <img
                      src={message.avatarUrl ?? DefaultAvatar}
                      alt="avatar"
                    />
                  }
                  content={<p>{message.msg}</p>}
                  datetime={
                    <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                      <span>{moment().fromNow()}</span>
                    </Tooltip>
                  }
                  key={index}
                />
              );
            })}
            <div ref={messagesEndRef} />
          </BoxMessages>
          <InputArea>
            <InputEmoji
              value={inputMessage}
              onChange={setInputMessage}
              cleanOnEnter
              onEnter={sendMessage}
              placeholder="Digite alguma coisa..."
            />
          </InputArea>
        </FormStyled>
      </StyledModal>
    </>
  );
};
export default Chat;
