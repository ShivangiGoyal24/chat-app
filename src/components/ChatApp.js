import React from "react";
import MessageList from "./MessageList/MessageList";
import UserList from "./UserList/UserList";
import AppHeader from "./AppHeader";
import Profile from "./Profile";
import SelectedChatInfo from "./SelectedChatInfo";
import { useSelector,useDispatch } from "react-redux";
import { toggleStatus } from "../actions/chatActions";

const ChatApp = () => {
  const currentChat = useSelector((state) => state.chat.currentChat);
  const dispatch = useDispatch();
  
  let chatNotSelected = currentChat === null;
  const handleStatusToggle = () => {
    dispatch(toggleStatus());
  };
  return (
    <div className="chat-app">
      <div className="panel-1">
        <AppHeader></AppHeader>
        {/* profile info */}
        <Profile handleStatusToggle={handleStatusToggle}></Profile>
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
