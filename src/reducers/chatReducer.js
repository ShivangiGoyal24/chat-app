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
        timestamp: "2023-08-12T10:30:00",
      },
      {
        msg_id: 2,
        id: 12, // id 12 is taken as id of the user
        text: "Hello Dan!",
        read: true,
        timestamp: "2023-08-12T10:30:01",
      },
      {
        msg_id: 3,
        id: 1,
        text: "How are you?",
        read: true,
        timestamp: "2023-08-12T10:30:02",
      },
      {
        msg_id: 4,
        id: 12,
        text: "I am fine",
        read: true,
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
        timestamp: "2023-08-12T10:30:00",
      },
      {
        msg_id: 2,
        id: 12,
        text: "Hello Tia!",
        read: true,
        timestamp: "2023-08-12T10:30:01",
      },
      {
        msg_id: 3,
        id: 2,
        text: "How are you?",
        read: true,
        timestamp: "2023-08-12T10:30:02",
      },
      {
        msg_id: 4,
        id: 12,
        text: "I am fine",
        read: true,
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
        text: "Hello Sam!",
        read: true,
        timestamp: "2023-08-12T10:30:00",
      },
      {
        msg_id: 2,
        id: 3,
        text: "Hello Shivangi!",
        read: true,
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

const users = [
  {
    id: 1,
    name: "Dan",
    lastName: "",
    avatar: "user1.png",
    active: true,
    email_id: "Dan@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 2,
    name: "Tia",
    lastName: "",
    avatar: "user2.png",
    active: true,
    email_id: "Tia@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 3,
    name: "Sam",
    lastName: "",
    avatar: "user3.png",
    active: true,
    email_id: "Sam@gmail.com",
    unreadMessages: 2,
  },
  {
    id: 4,
    name: "Jenny",
    lastName: "",
    avatar: "user4.png",
    active: true,
    email_id: "Jenny@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 5,
    name: "Jacob",
    lastName: "",
    avatar: "user5.png",
    active: true,
    email_id: "Jacob@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 6,
    name: "Smith",
    lastName: "",
    avatar: "user6.png",
    active: false,
    email_id: "Smith@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 7,
    name: "Lily",
    lastName: "",
    avatar: "user7.png",
    active: false,
    email_id: "Lily@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 8,
    name: "Galin",
    lastName: "",
    avatar: "user8.png",
    active: true,
    email_id: "Galin@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 9,
    name: "Ria",
    lastName: "",
    avatar: "user9.png",
    active: true,
    email_id: "Ria@gmail.com",
    unreadMessages: 0,
  },
  {
    id: 10,
    name: "Ben",
    lastName: "",
    avatar: "user10.png",
    active: false,
    email_id: "Ben@gmail.com",
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
    active: false,
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
      console.log("updatedConv", updatedConv);

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
      let updatedSampleMessages = state.conversations.filter(
        (chat) => chat.id !== action.payload
      );
      return {
        ...state,
        users: [...updatedUsersList],
        currentChat: user,
        conversations: [...updatedSampleMessages, conversation],
      };
    case "GO_TO_LIST":
      return {
        ...state,
        currentChat: null,
      };
    case "TOGGLE_STATUS":
      let status = state.profileInfo.active;
      return {
        ...state,
        profileInfo: { ...state.profileInfo, active: !status },
      };
      case "ARCHIVE_CHAT":
        let chat = state.currentChat
        chat.active=false
        let userList =state.users.filter((user)=>user.id!==chat.id)
        console.log()
        return {
          ...state,
          users: [...userList, chat ],
        };
    default:
      return state;
  }
};

export default chatReducer;
