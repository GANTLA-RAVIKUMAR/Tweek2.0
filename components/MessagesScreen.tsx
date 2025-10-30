import React from 'react';
import { MOCK_CONVERSATIONS } from '../constants';
import type { Conversation, User } from '../types';
import { Screen } from '../types';

interface MessagesScreenProps {
  onSelectConversation: (user: User) => void;
}

export const MessagesScreen: React.FC<MessagesScreenProps> = ({ onSelectConversation }) => {
  return (
    <div className="h-full bg-white">
      <ul>
        {MOCK_CONVERSATIONS.map((convo) => (
          <li
            key={convo.id}
            onClick={() => onSelectConversation(convo.user)}
            className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            <img src={convo.user.avatar} alt={convo.user.name} className="w-12 h-12 rounded-full" />
            <div className="flex-grow ml-4">
              <div className="flex justify-between items-baseline">
                <p className="font-bold text-gray-800">{convo.user.name}</p>
                <p className="text-xs text-gray-400">{convo.timestamp}</p>
              </div>
              <p className="text-sm text-gray-600 truncate">{convo.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
