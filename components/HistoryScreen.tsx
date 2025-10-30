import React, { useState } from 'react';
import { MOCK_HISTORY } from '../constants';
import type { HistoryItem } from '../types';

interface HistoryScreenProps {
  coins: number;
  setCoins: (coins: number) => void;
}

const HistoryListItem: React.FC<{ item: HistoryItem, onAddFriend: (id: string) => void }> = ({ item, onAddFriend }) => {
  return (
    <li className="flex items-center justify-between p-3 border-b border-gray-200 bg-white">
        <div className="flex items-center">
            <img src={item.user.avatar} alt={item.user.name} className="w-12 h-12 rounded-full" />
            <div className="ml-4">
                <p className="font-bold text-gray-800">{item.user.name}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
                <p className="text-xs text-gray-400">Duration: {item.duration}</p>
                <p className="text-xs text-gray-400">{item.timestamp}</p>
            </div>
        </div>
        <button
            onClick={() => !item.isFriend && onAddFriend(item.id)}
            disabled={item.isFriend}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                item.isFriend
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-sky-500 text-white hover:bg-sky-600'
            }`}
        >
            {item.isFriend ? 'FRIEND' : 'ADD FRIEND'}
        </button>
    </li>
  );
};

export const HistoryScreen: React.FC<HistoryScreenProps> = ({ coins, setCoins }) => {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>(MOCK_HISTORY);

  const handleAddFriend = (id: string) => {
    const friendCost = 10;
    if (coins >= friendCost) {
      setCoins(coins - friendCost);
      setHistoryItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, isFriend: true } : item
        )
      );
    } else {
      alert("Not enough coins! Go to the 'Buy Coins' page.");
    }
  };

  return (
    <div className="h-full bg-gray-100">
      <ul className="divide-y divide-gray-200">
        {historyItems.map(item => (
            <HistoryListItem key={item.id} item={item} onAddFriend={handleAddFriend} />
        ))}
      </ul>
    </div>
  );
};
