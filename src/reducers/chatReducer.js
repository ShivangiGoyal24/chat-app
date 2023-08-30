const sampleMessages = [
  //conversation 1
  {
    chatId: 1, //chat id  refers the users at other side
    conversation: [
      {
        msg_id: 1,
        id: 1,
        text: "Hello there!",
        read: true,
        attachments: [
          // { id: "file1", name: "document.pdf", url: "/uploads/document.pdf" },
        ],
        timestamp: "2023-08-12T10:30:00",
      },
      {
        msg_id: 2,
        id: 12, // id 12 is taken as id of the user
        text: "Hello Alan!",
        read: true,
        attachments: [],
        timestamp: "2023-08-12T10:30:01",
      },
      {
        msg_id: 3,
        id: 1,
        text: "How are you?",
        read: true,
        attachments: [],
        timestamp: "2023-08-12T10:30:02",
      },
      {
        msg_id: 4,
        id: 12,
        text: "I am fine",
        read: true,
        attachments: [],
        timestamp: "2023-08-12T10:30:03",
      },
    ],
  },
  //conversation 2
  {
    chatId: 2,
    conversation: [
      {
        msg_id: 1,
        id: 2,
        text: "Hello there!",
        read: true,
        attachments: [],
        timestamp: "2023-08-12T10:30:00",
      },
      {
        msg_id: 2,
        id: 12,
        text: "Hello Evan!",
        read: true,
        attachments: [],
        timestamp: "2023-08-12T10:30:01",
      },
      {
        msg_id: 3,
        id: 2,
        text: "How are you?",
        read: true,
        attachments: [],
        timestamp: "2023-08-12T10:30:02",
      },
      {
        msg_id: 4,
        id: 12,
        text: "I am fine",
        read: true,
        attachments: [],
        timestamp: "2023-08-12T10:30:03",
      },
    ],
  },
  //chat for unread messages
  {
    chatId: 3,
    conversation: [
      {
        msg_id: 1,
        id: 12,
        text: "Hello Jane!",
        read: true,
        attachments: [],
        timestamp: "2023-08-12T10:30:00",
      },
      {
        msg_id: 2,
        id: 3,
        text: "Hello Shivangi!",
        read: true,
        attachments: [],
        timestamp: "2023-08-12T10:30:01",
      },
      {
        msg_id: 3,
        id: 12,
        text: "How are you?",
        read: false,
        timestamp: "2023-08-12T10:30:02",
      },
      {
        msg_id: 4,
        id: 3,
        text: "I am fine",
        read: false,
        timestamp: "2023-08-12T10:30:03",
      },
    ],
  },
  //chats with no message
  {
    chatId: 4,
    conversation: [],
  },
  {
    chatId: 5,
    conversation: [],
  },
  {
    chatId: 6,
    conversation: [],
  },
  {
    chatId: 7,
    conversation: [],
  },
  {
    chatId: 8,
    conversation: [],
  },
  {
    chatId: 9,
    conversation: [],
  },
  {
    chatId: 10,
    conversation: [],
  },
];
//used active to identify the archived and unarchived chats
// used status to identify the online users
const users = [
  {
    id: 1,
    name: "Alan",
    lastName: "",
    avatar: "user1.png",
    active: true,
    status: true,
    profileLink: "https://www.quickchat.com/alan",
    email_id: "Alan@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 2,
    name: "Evan",
    lastName: "",
    avatar: "user2.png",
    active: true,
    status: true,
    profileLink: "https://www.quickchat.com/evan",
    email_id: "Evan@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 3,
    name: "Jane",
    lastName: "",
    avatar: "user3.png",
    active: true,
    status: true,
    profileLink: "https://www.quickchat.com/jane",
    email_id: "Jane@gmail.com",
    unreadMessages: 2,
  },
  {
    id: 4,
    name: "Anna",
    lastName: "",
    avatar: "user4.png",
    active: true,
    status: true,
    profileLink: "https://www.quickchat.com/anna",
    email_id: "Anna@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 5,
    name: "Mark",
    lastName: "",
    avatar: "user5.png",
    active: true,
    status: true,
    profileLink: "https://www.quickchat.com/mark",
    email_id: "Mark@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 6,
    name: "Ahan",
    lastName: "",
    avatar: "user6.png",
    active: false,
    status: true,
    profileLink: "https://www.quickchat.com/ahan",
    email_id: "Ahan@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 7,
    name: "Lily",
    lastName: "",
    avatar: "user7.png",
    active: false,
    status: true,
    profileLink: "https://www.quickchat.com/lily",
    email_id: "Lily@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 8,
    name: "Brad",
    lastName: "",
    avatar: "user8.png",
    active: true,
    status: true,
    profileLink: "https://www.quickchat.com/brad",
    email_id: "Brad@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 9,
    name: "Rita",
    lastName: "",
    avatar: "user9.png",
    active: true,
    status: true,
    profileLink: "https://www.quickchat.com/rita",
    email_id: "Rita@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 10,
    name: "Kyle",
    lastName: "",
    avatar: "user10.png",
    active: false,
    status: true,
    profileLink: "https://www.quickchat.com/kyle",
    email_id: "Kyle@gmail.com",
    unreadMessages: 0,
  },
];

const initialState = {
  currentChat: null,
  profileInfo: {
    id: 12,
    name: "Shivangi",
    lastName: "",
    avatar: "user12.png",
    designation: "Lead UI/UX Designer",
    status: false,
  },
  conversations: sampleMessages,
  users,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      let updatedConv = state.conversations;
      updatedConv.forEach((chat) => {
        if (chat.chatId === state.currentChat.id) {
          chat.conversation?.push(action.payload);
        }
      });

      return {
        ...state,
        conversations: [...updatedConv],
      };
    case "SELECT_CHAT":
      //select chat
      let user = null;
      let updatedUsersList = state.users;
      updatedUsersList.forEach((item) => {
        if (item.id === action.payload) {
          item.unreadMessages = 0; //mark messages read
          user = item;
        }
      });
      let conversation = state.conversations.filter(
        (chat) => chat.id === action.payload
      );
      conversation.forEach((message) => (message.read = true));
      let updatedJanepleMessages = state.conversations.filter(
        (chat) => chat.id !== action.payload
      );
      return {
        ...state,
        users: [...updatedUsersList],
        currentChat: user,
        conversations: [...updatedJanepleMessages, conversation],
      };
    case "GO_TO_LIST":
      return {
        ...state,
        currentChat: null,
      };
    case "TOGGLE_STATUS":
      let status = state.profileInfo.status;
      return {
        ...state,
        profileInfo: { ...state.profileInfo, status: !status },
      };
    case "ARCHIVE_CHAT":
      let chat = state.currentChat;
      chat.active = !chat.active;
      let userList = state.users.filter((user) => user.id !== chat.id);
      return {
        ...state,
        users: [...userList, chat],
      };
    default:
      return state;
  }
};

export default chatReducer;
