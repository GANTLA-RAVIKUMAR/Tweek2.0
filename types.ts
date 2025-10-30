export enum Screen {
  Login = 'Login',
  Main = 'Tweek',
  History = 'History',
  Messages = 'Messages',
  Chat = 'Chat',
  Coins = 'Coins',
}

export interface User {
  id: string;
  name: string;
  avatar: string;
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
  text: string;
  timestamp: string;
  isSender: boolean;
}

export interface Conversation {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  messages: Message[];
}
