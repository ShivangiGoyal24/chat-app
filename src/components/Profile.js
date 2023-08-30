import React from "react";
import { useSelector } from "react-redux";
// import { toggleStatus } from "../actions/chatActions";
import ProfileSettingsButton from "./ProfileSettingsButton";
export default function Profile({handleStatusToggle}) {
  // const dispatch = useDispatch();
  const { name, avatar, status, designation } = useSelector(
    (state) => state.chat.profileInfo
  );
  const {currentChat } = useSelector((state) => state.chat);
  // const handleStatusToggle = () => {
  //   dispatch(toggleStatus());
  // };
  let imageName = require(`../imgAssets/${avatar}`);
  let activeStatusImage = status
    ? require("../imgAssets/chatOn.png")
    : require("../imgAssets/chatOff.png");
 
  return (
    <div className={`profile ${currentChat ? "hide" : "show"}`}>
      <img className="profile-avatar" src={imageName} alt={name} />
      <span className="profile-name">{name}
      
      <ProfileSettingsButton/>
      </span>
      <span className="profile-designation">{designation}</span>
      <img
        className="profile-active"
        src={activeStatusImage}
        alt={name}
        onClick={handleStatusToggle}
      />
    </div>
  );
}
