import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import { Input } from "../InputFile/styles";
import Button from "../Button";

interface MessageInterface {
  msg: string;
  socketIdUser: string;
  name: string;
}

// const socket = io("https://daisuki-chat-back.herokuapp.com/");
const socket = io("http://localhost:4000");

const Chat = () => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [socketId, setSocketId] = useState<string>("");
  const [name, setName] = useState<string>("Batata");

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputMessage);
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

      setInputMessage("");
    }
  };

  useEffect(() => {
    socket.on("chat message", (msg) => {
      // console.log(messages);
      // console.log(msg);
      // setMessages([...messages, msg]);

      setMessages(msg);
    });

    return () => {
      socket.disconnect();
    };
  });
  useEffect(() => {
    socket.on("connect", () => {
      setSocketId(socket.id); // "G5p5..."
    });
  }, []);

  return (
    <div>
      <form onSubmit={(e) => sendMessage(e)}>
        {messages.map((message, index) => {
          if (message.socketIdUser === socketId) {
            return <li key={index}>minha mesma {message.msg}</li>;
          }
          return <li key={index}>outra pessoa{message.msg}</li>;
        })}
        <Input onChange={(e) => setInputMessage(e.target.value)} />
        <Button text="Enviar mensagem" />
      </form>
      <button>Tatakae </button>
    </div>
  );
};

export default Chat;
