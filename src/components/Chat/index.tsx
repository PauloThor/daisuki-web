import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Modal, Comment, Avatar, Tooltip } from "antd";
import Button from "../Button";
import {
  StyledModal,
  MessageSentStyled,
  MessageReceivedStyled,
  BoxMessages,
  FormStyled,
  ButtonStyled,
} from "./styles";
import AvatarEmanu from "../../assets/img/avatar-emanuela.png";
import moment from "moment";

interface MessageInterface {
  msg: string;
  socketIdUser: string;
  name: string;
}

const socket = io("https://daisuki-chat-back.herokuapp.com");

const Chat = () => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [socketId, setSocketId] = useState<string>("");
  const [name, setName] = useState<string>("Batata");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputMessage) {
      socket.emit(
        "chat message",
        [
          ...messages,
          {
            msg: inputMessage,
            socketIdUser: socketId,
            name: name,
          },
        ].slice(-5)
      );
      // TODO: limpar o input em si
      // setInputMessage("");
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
  return (
    <>
      <button onClick={showModal}>Chat</button>
      <StyledModal
        title="Chat dos otaku"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <BoxMessages>
          <FormStyled onSubmit={(e) => sendMessage(e)}>
            {messages.map((message, index) => {
              if (message.socketIdUser === socketId) {
                return (
                  <MessageSentStyled
                    author={message.socketIdUser}
                    avatar={
                      <Avatar src="../../assets/img/avatar-emanuela.png" />
                    }
                    content={<p>{message.msg}</p>}
                    datetime={
                      <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                        <span>{moment().fromNow()}</span>
                      </Tooltip>
                    }
                  />
                );
              }
              return (
                <MessageReceivedStyled
                  author={message.socketIdUser}
                  avatar={<Avatar src="../../assets/img/avatar-emanuela.png" />}
                  content={<p>{message.msg}</p>}
                  datetime={
                    <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                      <span>{moment().fromNow()}</span>
                    </Tooltip>
                  }
                />
              );
            })}
            <input onChange={(e) => setInputMessage(e.target.value)} />
            <ButtonStyled>Enviar</ButtonStyled>
          </FormStyled>
        </BoxMessages>
      </StyledModal>
    </>
  );
};
export default Chat;
