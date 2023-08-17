import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { sendMessage } from '../actions/chatActions';

const ChatInput = () => {
    const [message, setMessage] = useState('');
    const {profileInfo,currentChat}=useSelector((state)=>state.chat)
    const dispatch = useDispatch();
    
    const handleSendMessage = () => {
        if (message.trim() !== '') {
           let messageData= {
                msg_id: "id" + Math.random().toString(4).slice(2),
                id: profileInfo.id,
                text: message,
                read: true,
                timestamp: Date.now(),
              }
            dispatch(sendMessage(messageData));
            setMessage('');
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && message.trim() !== '') {
            handleSendMessage()
        }
      };
    return (
        <div className={`message-input-container ${currentChat?'show':'hide'}`}>
            <input className='message-input'
                type="text"
                value={message}
                placeholder="Type your message..."
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <button className='send-button' onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatInput;
