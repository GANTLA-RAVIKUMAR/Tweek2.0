import { HistoryItem, Conversation, Message, User } from './types';

const users: { [key: string]: User } = {
  s: { id: 's', name: 'S•', avatar: 'https://i.pravatar.cc/150?u=s' },
  irf: { id: 'irf', name: 'Irf••', avatar: 'https://i.pravatar.cc/150?u=irf' },
  aj: { id: 'aj', name: 'Aj••', avatar: 'https://i.pravatar.cc/150?u=aj' },
  anas: { id: 'anas', name: 'Anas••••', avatar: 'https://i.pravatar.cc/150?u=anas' },
  yo: { id: 'yo', name: 'Yo••', avatar: 'https://i.pravatar.cc/150?u=yo' },
  esh: { id: 'esh', name: 'Esh••', avatar: 'https://i.pravatar.cc/150?u=esh' },
  jab: { id: 'jab', name: 'Jab••', avatar: 'https://i.pravatar.cc/150?u=jab' },
  saja: { id: 'saja', name: 'Saja•••', avatar: 'https://i.pravatar.cc/150?u=saja' },
  me: { id: 'me', name: 'You', avatar: 'https://i.pravatar.cc/150?u=me' },
};

export const MOCK_HISTORY: HistoryItem[] = [
  { id: '1', user: users.s, location: 'delhi, IN', duration: '9 seconds', timestamp: '11:45:26, 16 Oct', isFriend: false },
  { id: '2', user: users.irf, location: 'patna, IN', duration: '22 seconds', timestamp: '11:44:48, 16 Oct', isFriend: false },
  { id: '3', user: users.aj, location: 'delhi, IN', duration: '12 seconds', timestamp: '11:44:12, 16 Oct', isFriend: true },
  { id: '4', user: users.anas, location: 'aligarh, IN', duration: '17 seconds', timestamp: '11:43:42, 16 Oct', isFriend: false },
  { id: '5', user: users.yo, location: 'mumbai, IN', duration: '31 seconds', timestamp: '11:42:01, 16 Oct', isFriend: false },
];

const ajChatMessages: Message[] = [
    { id: 'c1', text: 'hey, how are you?', timestamp: '7:35 pm', isSender: true },
    { id: 'c2', text: 'very well. thank you.', timestamp: '7:37 pm', isSender: false },
    { id: 'c3', text: 'How about yourself?', timestamp: '7:37 pm', isSender: false },
    { id: 'c4', text: 'oh gosh. all kind of stuff!', timestamp: '7:39 pm', isSender: true },
    { id: 'c5', text: 'no worries. let\'s have dinner together if you get some time from work', timestamp: '7:47 pm', isSender: false },
    { id: 'c6', text: 'yeah, sure. let\'s meet in 30min.', timestamp: '7:47 pm', isSender: true },
    { id: 'c7', text: 'okay 👍', timestamp: '7:48 pm', isSender: false },
];


export const MOCK_CONVERSATIONS: Conversation[] = [
  { id: 'c1', user: users.aj, lastMessage: "okay 👍", timestamp: '11:50 AM', messages: ajChatMessages },
  { id: 'c2', user: users.irf, lastMessage: 'add me', timestamp: '11:45 AM', messages: [{ id: 'm1', text: 'add me', timestamp: '11:45 AM', isSender: false }] },
  { id: 'c3', user: users.s, lastMessage: 'nice to meet you.', timestamp: '11:44 AM', messages: [{ id: 'm2', text: 'nice to meet you.', timestamp: '11:44 AM', isSender: false }] },
  { id: 'c4', user: users.yo, lastMessage: 'your name', timestamp: '11:43 AM', messages: [{ id: 'm3', text: 'your name', timestamp: '11:43 AM', isSender: false }] },
  { id: 'c5', user: users.esh, lastMessage: 'lets meet', timestamp: '11:42 AM', messages: [{ id: 'm4', text: 'lets meet', timestamp: '11:42 AM', isSender: false }] },
  { id: 'c6', user: users.jab, lastMessage: 'how are you friend?', timestamp: '11:41 AM', messages: [{ id: 'm5', text: 'how are you friend?', timestamp: '11:41 AM', isSender: false }] },
  { id: 'c7', user: users.saja, lastMessage: 'hi', timestamp: '11:41 AM', messages: [{ id: 'm6', text: 'hi', timestamp: '11:41 AM', isSender: false }] },
];
