import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { archiveChat } from "../actions/chatActions";

export default function CopyLink() {
  const dispatch = useDispatch();
  const currentChat = useSelector((state) => state.chat.currentChat);

  const textToCopy = "https://example.com"; // Replace with your link
  const textRef = useRef(null);

  const handleCopyLink = () => {
    // Select and copy the link text
    textRef.current.select();
    document.execCommand("copy");

    // Deselect the text
    // window.getSelection().removeAllRanges();
  };

  // ... Rest of your component ...

  return (
    <div className="copy-link panel3-item">
        <h3>Onboard Clients</h3>
        <p>Share link with prospects and discuss the stuff</p>
      {/* ... Other JSX ... */}
      <input
        ref={textRef}
        type="text"
        value={currentChat?.profileLink}
        readOnly
        style={{ position: "absolute", left: "-9999px" }}
      />
      <button className="copy-link-button" onClick={handleCopyLink}>
        Copy Link
      </button>
    </div>
  );
}
