import React, { useState, useRef,useEffect } from "react";
import Picker from "emoji-picker-react";
import FileUpload from "./FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../actions/chatActions";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { profileInfo, currentChat } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  let emojiIcon = require("../imgAssets/emojiButton.png");
  // Added emoji
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const ref = useRef(null);
  const emojiPickerRef = useRef(null);
  const handleEmojiClick = (event, emojiObject) => {
    const cursor = ref.current.selectionStart;
    const text =
      message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
    setMessage(text);
    ref.current.focus();
  };
  const handleClickOutside = (event) => {
    if (
      showEmojiPicker &&
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target) &&
      ref.current &&
      !ref.current.contains(event.target)
    ) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    // Attach event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showEmojiPicker]);
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      let messageData = {
        msg_id: "id" + Math.random().toString(4).slice(2),
        id: profileInfo.id,
        text: message,
        read: true,
        timestamp: Date.now(),
      };
      dispatch(sendMessage(messageData));
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && message.trim() !== "") {
      handleSendMessage();
    }
  };

  return (
    <div className={`message-input-container ${currentChat ? "show" : "hide"}`}>
      <FileUpload />
      <input
        className="message-input"
        type="text"
        id="text"
        ref={ref}
        value={message}
        placeholder="Type your message..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div className="emoji-picker-container" ref={emojiPickerRef}>
        {showEmojiPicker && (
          <div className="emoji-picker-box">
            <Picker onEmojiClick={handleEmojiClick} />
          </div>
        )}
        <img
          className="emoji-logo"
          src={emojiIcon}
          alt="Settings"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        />
      </div>
      <button className="send-button" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
