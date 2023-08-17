import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatus } from "../actions/chatActions";
export default function Profile() {
  const dispatch = useDispatch();
  const { id, name, avatar, active, designation } = useSelector(
    (state) => state.chat.profileInfo
  );
  const handleStatusToggle = () => {
    dispatch(toggleStatus());
  };
  let imageName = require(`../imgAssets/${avatar}`);
  let activeStatusImage = active
    ? require("../imgAssets/chatOn.png")
    : require("../imgAssets/chatOff.png");

  return (
    <div className="profile">
      <img className="profile-avatar" src={imageName} alt={name} />
      <span className="profile-name">{name}</span>
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
