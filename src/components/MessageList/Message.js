import React, { useEffect, useState } from 'react';
import { timeAgo } from '../../utilities/timeConverter';
// import unreadMessagesInfo from './unreadMessagesInfo';
import avatarPlaceholder from '../../imgAssets/avatar-placeholder';

const Message = ({
  text,
  user,
  timestamp,
  msgId,
  appUser,
  insertUnreadMessagesInfo,
}) => {
  const [showUnreadMessageText, setShowUnreadMessageText] = useState(true);
  const [isOnline,setIsOnline]=useState(user?.status)
  useEffect(() => {
    if (insertUnreadMessagesInfo) {
      setTimeout(() => {
        setShowUnreadMessageText(false);
      }, 1000);
    }
  }, [insertUnreadMessagesInfo]);

  const imageName = user.avatar
    ? require(`../../imgAssets/${user.avatar}`)
    : avatarPlaceholder;

  const renderUnreadMessagesInfo = () => {
    if (insertUnreadMessagesInfo && showUnreadMessageText) {
      return <div className='unread-messages-info'>Unread messages</div>;
    }
    return null;
  };
  return (
    <>
      {renderUnreadMessagesInfo()}
      <div className={`message ${appUser ? 'app-chat' : 'app-user'}`} key={msgId + user.id}>
        <div className='message-header'>
          <img className='avatar' src={imageName} alt={user.name} />
          { <div className={`${user.status ?'green':'grey'} dot`} />}
          <span className='message-text'>{text}</span>
        </div>
        <div className='timestamp'>{timeAgo(new Date(timestamp))}</div>
      </div>
    </>
  );
};

export default Message;
