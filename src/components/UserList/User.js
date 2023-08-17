import React from 'react';
import {useSelector} from 'react-redux';

const User = ({ avatar, userName, id,unreadMessages, handleClick,handleMarkMessagesRead }) => {
  const currentChat = useSelector((state) => state.chat.currentChat);
// useEffect(()=>{
//   if(unreadMessages)
// },[])
    let imageName = require(`../../imgAssets/${avatar}`)
  return (
    <div className={`user${currentChat?.id===id ?'-active':''}`} key={id}>
        <div className="user-info" value={id} onClick={handleClick}>
        <img className="avatar" src={imageName} alt={userName} />
          <span className="username" >{userName}</span>
          <span className={`unread-messages-badge ${unreadMessages?'show':'hide'}`}>{unreadMessages}</span>
        </div>
    </div>
  );
};

export default User;
