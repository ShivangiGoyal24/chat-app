import {React,useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { archiveChat } from "../actions/chatActions";
import CopyLink from "./CopyLink";
export default function SelectedChatInfo() {
  const [archiveButtonText,setArchiveButtonText]= useState(true)
  const dispatch = useDispatch();
  const currentChat = useSelector((state) => state.chat.currentChat);
  const handleArchiveChat = () => {
    dispatch(archiveChat());
setArchiveButtonText(()=>currentChat?.active)

  };
// useEffect(()=>{
// setArchiveButtonText(()=>currentChat?.active)
// },[currentChat])
  if (!currentChat) {
    return null;
  }

  const emailLogo = require("../imgAssets/emailLogo.png");
  const profileLogo = require("../imgAssets/profileLogo.png");
  const archiveIcon = require("../imgAssets/archive_icon.png");
  const { name, lastName, email_id } = currentChat;

  const getNameInitials = () => {
    const initials =
      name?.charAt(0)?.toUpperCase() + lastName?.charAt(0)?.toUpperCase();
    return initials;
  };

  return (
    <>
    <div className="selected-chat panel3-item">
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
        {`${archiveButtonText?'Archive':'Unarchive'}`}
        <img
          className="selected-chat-logo"
          src={archiveIcon}
          alt="archive-Logo"
        />
      </button>
    </div>
    <CopyLink/>

    </>
  );
}
