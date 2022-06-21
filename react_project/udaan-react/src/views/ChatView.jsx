import React from "react";
import { Row, Button, Col } from "react-bootstrap";
import Chat from "./components/Chat";
import MsgInput from "./components/MsgInput";

const ChatView = () => {
  return (
    <div className="chat-view">
      <div className="chat-box">
        <div className="chat-list">
          <Chat type={1} msg="I am a chat" />
          <Chat type={2} msg="Hi Guru" />
          <Chat type={1} msg="Why Guru?" />
          <Chat type={2} msg="Chalo shuru krte hai" />
        </div>
        <MsgInput />
      </div>
    </div>
  );
};

export default ChatView;
