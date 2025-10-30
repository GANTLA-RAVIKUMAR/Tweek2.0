import React, { useState, useRef, useEffect } from 'react';
import { User, ChatMessage as ChatMessageType } from '../types';
import { MOCK_CHAT_HISTORY } from '../constants';
import { SendIcon } from './icons';

interface ChatScreenProps {
  user: User;
}

const ChatMessage: React.FC<{ message: ChatMessageType, user: User }> = ({ message, user }) => {
  const isMe = message.senderId === 'me';
  return (
    <div className={`flex items-end mb-4 ${isMe ? 'justify-end' : 'justify-start'}`}>
      {!isMe && (
        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full mr-3" />
      )}
      <div 
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          isMe 
            ? 'bg-sky-500 text-white rounded-br-none' 
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <p>{message.text}</p>
        <p className={`text-xs mt-1 ${isMe ? 'text-sky-100' : 'text-gray-500'} text-right`}>
          {message.timestamp}
        </p>
      </div>
    </div>
  );
};

export const ChatScreen: React.FC<ChatScreenProps> = ({ user }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>(MOCK_CHAT_HISTORY[user.id] || []);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      const newMessage: ChatMessageType = {
        id: `msg-${Date.now()}`,
        text: inputText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        senderId: 'me',
      };
      setMessages([...messages, newMessage]);
      setInputText('');

      // Simulate a reply
      setTimeout(() => {
        const replyMessage: ChatMessageType = {
          id: `msg-${Date.now() + 1}`,
          text: 'Sounds good!',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          senderId: user.id,
        };
        setMessages(prev => [...prev, replyMessage]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map(msg => (
          <ChatMessage key={msg.id} message={msg} user={user} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow bg-gray-100 rounded-full py-2 px-4 focus:outline-none"
          />
          <button type="submit" className="bg-sky-500 text-white p-2 rounded-full shadow-md hover:bg-sky-600 transition-colors disabled:bg-gray-300" disabled={!inputText.trim()}>
            <SendIcon className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};
