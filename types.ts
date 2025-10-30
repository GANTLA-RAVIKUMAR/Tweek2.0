export enum Screen {
  Login = 'Login',
  Main = 'Main',
  History = 'History',
  Messages = 'Messages',
  Chat = 'Chat',
  Coins = 'Coins',
  Searching = 'Searching',
  VideoCall = 'VideoCall',
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  age: number;
  location: string;
}

export interface HistoryItem {
  id: string;
  user: User;
  location: string;
  duration: string;
  timestamp: string;
  isFriend: boolean;
}

export interface Message {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
}

export interface ChatMessage {
    id: string;
    text: string;
    timestamp: string;
    senderId: 'me' | string;
}
