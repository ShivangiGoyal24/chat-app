import React ,{useEffect, useState} from 'react';
import {timeAgo} from '../../utilities/timeConverter'
const Message = ({ text, user, timestamp,msgId,appUser ,insertUnreadMessagesInfo}) => {
  const [showUreadMessageText, setShowUreadMessageText]=useState(true)
  useEffect(()=>{
    if(insertUnreadMessagesInfo)
    setTimeout(()=>{
      setShowUreadMessageText(false)
    },1000)
  })
let imageName = require(`../../imgAssets/${user.avatar}`)
  return (
    <>
    {insertUnreadMessagesInfo && showUreadMessageText ?<div className='unread-messages-info'>Unread messages</div>:null}
    <div className={`message ${appUser?'app-chat':'app-user'}`} key={msgId+user.id}>
      <div className="message-header">
        <img className="avatar" src={imageName} alt={user.name} />
          <span className="message-text">{text}</span>
      </div>
      <div className="timestamp">{timeAgo(new Date(timestamp))}</div>
    </div>
    </>
  );
};

export default Message;
