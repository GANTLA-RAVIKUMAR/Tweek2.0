import React, { useState, useEffect, useRef } from 'react';
import type { Message, User } from '../types';
import { MOCK_CONVERSATIONS } from '../constants';
import { SendIcon } from './icons';

interface ChatScreenProps {
  user: User;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({ user }) => {
  const initialConversation = MOCK_CONVERSATIONS.find(c => c.user.id === user.id);
  const [messages, setMessages] = useState<Message[]>(initialConversation?.messages || []);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase(),
      isSender: true,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="flex-grow p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isSender ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${msg.isSender ? 'bg-green-200 rounded-br-none' : 'bg-white rounded-bl-none shadow-sm'}`}>
              <p className="text-sm text-gray-800">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.isSender ? 'text-right text-green-700' : 'text-left text-gray-400'}`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="bg-white p-2 flex items-center border-t border-gray-200">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Enter message"
          className="flex-grow bg-gray-100 rounded-full py-2 px-4 focus:outline-none"
        />
        <button type="submit" className="ml-2 text-sky-500 p-2 rounded-full hover:bg-sky-100">
          <SendIcon className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};
