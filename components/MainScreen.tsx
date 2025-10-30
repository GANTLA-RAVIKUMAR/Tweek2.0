import React from 'react';
import { UserIcon } from './icons';
import { MOCK_USERS } from '../constants';

interface MainScreenProps {
  onStartSearch: () => void;
}

export const MainScreen: React.FC<MainScreenProps> = ({ onStartSearch }) => {
  return (
    <div className="flex flex-col h-full bg-gray-100 p-4">
      <div className="text-center my-8">
        <h2 className="text-2xl font-bold text-gray-800">Find new friends</h2>
        <p className="text-gray-500 mt-2">Tap the button to start matching with people around the world.</p>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <button 
          onClick={onStartSearch}
          className="relative w-48 h-48 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform duration-200 hover:scale-105"
        >
          <span className="absolute inset-0 bg-sky-400 rounded-full animate-ping opacity-75"></span>
          <UserIcon className="w-20 h-20" />
        </button>
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold text-gray-700 mb-2">Recently active</h3>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {MOCK_USERS.map(user => (
            <div key={user.id} className="flex-shrink-0 flex flex-col items-center">
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full border-2 border-green-400 p-0.5" />
              <p className="text-sm mt-1 text-gray-600">{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
