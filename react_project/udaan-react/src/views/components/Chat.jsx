import React from "react";
import { Card } from "react-bootstrap";

const Chat = ({ type, msg }) => {
  return (
    <div>
      <div className={type === 1 ? "chat-1" : "chat-2"}>{msg}</div>
    </div>
  );
};

export default Chat;
