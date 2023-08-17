import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./User";
import { selectChat,markMessagesRead } from '../../actions/chatActions'

export default function UserList() {
  let upArrow = require("../../imgAssets/upArrow.png");
  let downArrow = require("../../imgAssets/downArrow.png");

  const [isActiveChatVisible,setActiveChat]=useState(true)
  const [isArchivedChatVisible,setArchivedChat]=useState(false)
  const { users, currentChat } = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  const handleChatSelect = (id) => {
    dispatch(selectChat(id.id));
  };
 
  let active = [];
  let archived = [];

  let memoizedUserLists = useMemo(() => {
    users?.forEach((user) => {
      if (user.active) {
        active.push(
          <User
            key={user.id}
            userName={user.name}
            id={user.id}
            avatar={user.avatar}
            unreadMessages={user.unreadMessages}
            handleClick={() => {
              handleChatSelect(user);
            }}
          />
        );
      } else {
        archived.push(
          <User
            userName={user.name}
            id={user.id}
            avatar={user.avatar}
            onClick={handleChatSelect}
          />
        );
      }
    });
    return { active, archived };
  }, [users]);
  return (
    <div className={`${currentChat ? "hide" : "show"}`}>
      <div className="active-chats">
        <h1 className="chat-list" onClick={()=>{setActiveChat(!isActiveChatVisible)}}>Active Chats
        {isActiveChatVisible? <img
            className="list-arrow"
            src={upArrow}
            alt="arrow-Logo"
          /> : <img
          className="list-arrow"
          src={downArrow}
          alt="arrow-Logo"
        /> }
        </h1>
        {isActiveChatVisible && <div className="active-user-list">{memoizedUserLists.active}</div>}
      </div>
      <div className="archived-chats">
        <h1 className="chat-list" onClick={()=>{setArchivedChat(!isArchivedChatVisible)}}>Archived Chats
        {isArchivedChatVisible? <img
            className="list-arrow"
            src={upArrow}
            alt="arrow-Logo"
          /> : <img
          className="list-arrow"
          src={downArrow}
          alt="arrow-Logo"
        /> }</h1>
        {isArchivedChatVisible && <div className="archived-user-list">{memoizedUserLists.archived}</div>}
      </div>
    </div>
  );
}
