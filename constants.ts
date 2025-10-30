import { User, HistoryItem, Message, ChatMessage } from './types';

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Alice', avatar: 'https://i.pravatar.cc/150?u=alice', age: 25, location: 'New York, USA' },
  { id: '2', name: 'Bob', avatar: 'https://i.pravatar.cc/150?u=bob', age: 28, location: 'London, UK' },
  { id: '3', name: 'Charlie', avatar: 'https://i.pravatar.cc/150?u=charlie', age: 22, location: 'Paris, France' },
  { id: '4', name: 'Diana', avatar: 'https://i.pravatar.cc/150?u=diana', age: 30, location: 'Tokyo, Japan' },
];

export const MOCK_HISTORY: HistoryItem[] = [
  { id: 'h1', user: MOCK_USERS[0], location: 'New York, USA', duration: '5:23', timestamp: '2 days ago', isFriend: false },
  { id: 'h2', user: MOCK_USERS[1], location: 'London, UK', duration: '12:01', timestamp: '3 days ago', isFriend: true },
  { id: 'h3', user: MOCK_USERS[2], location: 'Paris, France', duration: '8:45', timestamp: '5 days ago', isFriend: false },
];

export const MOCK_MESSAGES: Message[] = [
  { id: 'm1', user: MOCK_USERS[0], lastMessage: 'Hey, how are you?', timestamp: '10:30 AM', unreadCount: 2 },
  { id: 'm2', user: MOCK_USERS[1], lastMessage: 'See you later!', timestamp: 'Yesterday' },
  { id: 'm3', user: MOCK_USERS[2], lastMessage: 'That was fun!', timestamp: '3 days ago' },
];

export const MOCK_CHAT_HISTORY: { [key: string]: ChatMessage[] } = {
  '1': [
    { id: 'c1-1', text: 'Hey, how are you?', timestamp: '10:30 AM', senderId: '1' },
    { id: 'c1-2', text: 'I am good, thanks! How about you?', timestamp: '10:31 AM', senderId: 'me' },
    { id: 'c1-3', text: 'Doing great!', timestamp: '10:32 AM', senderId: '1' },
  ],
  '2': [
    { id: 'c2-1', text: 'See you later!', timestamp: 'Yesterday', senderId: '2' },
  ],
  '3': [
    { id: 'c3-1', text: 'That was fun!', timestamp: '3 days ago', senderId: '3' },
  ],
};
