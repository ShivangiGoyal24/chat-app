import React, { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
import { goToChatList } from "../../actions/chatActions";
import ChatInput from "../ChatInput";
const BackButton = (props) => {
  const dispatch = useDispatch();
  const handleBackButtonClick = () => {
    dispatch(goToChatList());
  };
  return (
    <span className="messageListHeader"><a className="back-button" href="#" onClick={handleBackButtonClick}>
    &lt;&nbsp;
  </a>
  <h4 className="chatUserName">{props.name}</h4>
  </span>
  );
};
const MessageList = () => {
  const { conversations, currentChat, profileInfo } = useSelector(
    (state) => state.chat
  );
  const chat = conversations.filter((conv) => conv.chatId === currentChat?.id);
  const sortedMessages = useMemo(() => {
    const messageList = chat[0]?.conversation?.sort(
      (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
    );
    return messageList;
  }, [chat]);

  let insertedUnreadMessagesInfo = false;
  let messageListItems = chat.length ? (
    sortedMessages?.map((message) => {
      let insert = false;
      if (!insertedUnreadMessagesInfo && !message.read) {
        insertedUnreadMessagesInfo = true;
        insert = true;
      } else {
        insert = false;
      }
      let isAppUser=(message.id === currentChat?.id)
      let messageUser=isAppUser ? currentChat : profileInfo
      return (
        <Message
          key={"id" + Math.random().toString(4).slice(2)}
          text={message.text}
          user={messageUser}
          appUser={isAppUser}
          timestamp={message.timestamp}
          insertUnreadMessagesInfo={insert}
        />
      );
    })
  ) : (
    <p className="empty-chat-message">Chat Away!</p>
  );
  return (
    <div className={`message-list ${currentChat ? "show" : "hide"}`}>
      <BackButton name={currentChat?.name} />
      {messageListItems}
      <ChatInput></ChatInput>
    </div>
  );
};

export default MessageList;
