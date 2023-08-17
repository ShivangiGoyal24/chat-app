import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { archiveChat } from "../actions/chatActions";
export default function SelectedChatInfo() {
  const dispatch = useDispatch();
  const currentChat = useSelector((state) => state.chat.currentChat);

  const handleArchiveChat = () => {
    dispatch(archiveChat());
  };

  if (currentChat) {
    let emailLogo = require("../imgAssets/emailLogo.png");
    let profileLogo = require("../imgAssets/profileLogo.png");
    let archiveIcon = require("../imgAssets/archive_icon.png");
    const { name, lastName, email_id } = currentChat;
    const getNameInitials = () => {
      let initials =
        name?.charAt(0)?.toUpperCase() + lastName?.charAt(0)?.toUpperCase();
      return initials;
    };
    return (
      <div className="selected-chat">
        <span className="selected-chat-avatar">{getNameInitials()}</span>
        <span className="selected-chat-name">
          <img
            className="selected-chat-logo"
            src={profileLogo}
            alt="profile-Logo"
          />
          {name}
        </span>
        <span className="selected-chat-email">
          <img
            className="selected-chat-logo"
            src={emailLogo}
            alt="email-Logo"
          />
          {email_id}
        </span>
        <button className="archive-button" onClick={handleArchiveChat}>
          Archive
          <img
            className="selected-chat-logo"
            src={archiveIcon}
            alt="archive-Logo"
          />
        </button>
      </div>
    );
  } else {
    return null;
  }
}
