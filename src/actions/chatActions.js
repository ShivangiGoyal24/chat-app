export const sendMessage = (message) => {
    return {
        type: 'SEND_MESSAGE',
        payload: message,
    };
};

export const selectChat = (message) => {
    return {
        type: 'SELECT_CHAT',
        payload: message,
    };
};

export const goToChatList = () => {
    return {
        type: 'GO_TO_LIST',
    };
};

export const markMessagesRead = () => {
    return {
        type: 'MARK_MESSAGES_READ',
    };
};

export const toggleStatus = () => {

    return {
        type: 'TOGGLE_STATUS',
    };
};
export const archiveChat = () => {
    return {
        type: 'ARCHIVE_CHAT',
    };
};