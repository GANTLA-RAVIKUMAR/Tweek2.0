import React from 'react';
import { MOCK_MESSAGES } from '../constants';
import { User } from '../types';

interface MessagesScreenProps {
    onSelectChat: (user: User) => void;
}

export const MessagesScreen: React.FC<MessagesScreenProps> = ({ onSelectChat }) => {
  return (
    <div className="bg-white h-full">
      <div className="p-4 border-b border-gray-200">
        <input 
          type="text" 
          placeholder="Search messages"
          className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
        />
      </div>
      <ul>
        {MOCK_MESSAGES.map(message => (
          <li 
            key={message.id} 
            onClick={() => onSelectChat(message.user)}
            className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-200"
          >
            <div className="relative">
              <img src={message.user.avatar} alt={message.user.name} className="w-14 h-14 rounded-full" />
              {/* Online indicator */}
              <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 border-2 border-white"></span>
            </div>
            <div className="flex-grow ml-4">
              <div className="flex justify-between items-center">
                <p className="font-bold text-gray-800">{message.user.name}</p>
                <p className="text-xs text-gray-500">{message.timestamp}</p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-600 truncate max-w-[180px]">{message.lastMessage}</p>
                {message.unreadCount && (
                  <span className="bg-sky-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {message.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
