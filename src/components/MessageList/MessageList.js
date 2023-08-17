import React, { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
import { goToChatList } from "../../actions/chatActions";
import ChatInput from "../ChatInput";
const BackButton = () => {
  const dispatch = useDispatch();
  const handleBackButtonClick = () => {
    dispatch(goToChatList());
  };
  return (
    <a className="back-button" href="#" onClick={handleBackButtonClick}>
      &lt;&nbsp;BACK
    </a>
  );
};
const MessageList = () => {
  const { conversations, currentChat, profileInfo } = useSelector(
    (state) => state.chat
  );
  // const users = useSelector((state) => state.chat.users);
  // const {updatedMessageList,setUpdatedMessages}= useState(messages)
  // let currentChat=1
  console.log("conversations", currentChat);

  const chat = conversations.filter((conv) => conv.chatId === currentChat?.id);
  const sortedMessages = useMemo(() => {
    const messageList = chat[0]?.conversation?.sort(
      (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
    );
    // console.log("messageList", messageList);
    return messageList;
  }, [chat]);

  let insertedUnreadMessagesInfo = false;
console.log('chat.length',chat)
  let messageListItems = chat.length ? (
    sortedMessages?.map((message) => {
      let insert = false;
      // console.log(insertedUnreadMessagesInfo);
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
      <BackButton />
      {messageListItems}
      <ChatInput></ChatInput>
    </div>
  );
};

export default MessageList;
