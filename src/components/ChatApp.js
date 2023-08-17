import React from "react";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList/MessageList";
import UserList from "./UserList/UserList";
import AppHeader from "./AppHeader";
import Profile from "./Profile";
import SelectedChatInfo from "./SelectedChatInfo";
import { useSelector } from "react-redux";

const ChatApp = () => {
  const currentChat = useSelector((state) => state.chat.currentChat);
  let chatNotSelected = currentChat === null;
  return (
    <div className="chat-app">
      <div className="panel-1">
        <AppHeader></AppHeader>
        {/* profile info */}
        <Profile></Profile>
        {/* active chats div */}
        <UserList></UserList>
      </div>

      <MessageList />
      {/* <ChatInput /> */}

      <div className={`panel-2 ${chatNotSelected ? "hide" : "show"}`}>
        {/* active chats div */}
        <SelectedChatInfo></SelectedChatInfo>
      </div>
    </div>
  );
};

export default ChatApp;
