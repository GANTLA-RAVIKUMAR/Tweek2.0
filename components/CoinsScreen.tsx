import React from 'react';
import { CoinIcon } from './icons';

interface CoinsScreenProps {
  coins: number;
}

const coinPacks = [
  { name: 'Starter pack', description: 'Get 10 coins, to keep you going!', price: '₹55.00', coins: 10 },
  { name: 'Silver pack', description: 'Get 75 coins, 50% discount on Starter pack!', price: '₹150.00', coins: 75 },
  { name: 'Gold pack', description: 'Get 175 coins, 75% discount on Starter pack!', price: '₹350.00', coins: 175 },
];


export const CoinsScreen: React.FC<CoinsScreenProps> = ({ coins }) => {
  return (
    <div className="p-4 bg-gray-50 h-full">
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-700">My coins: {coins}</h2>
      </div>

      <div className="space-y-3">
        {coinPacks.map((pack) => (
          <div key={pack.name} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
            <div className="flex items-center">
                <div className="bg-yellow-400 p-3 rounded-full mr-4">
                    <p className="text-white font-bold text-xl">C</p>
                </div>
                <div>
                    <h3 className="font-bold text-gray-800">{pack.name}</h3>
                    <p className="text-sm text-gray-500">{pack.description}</p>
                </div>
            </div>
            <button className="bg-sky-500 text-white font-bold py-2 px-5 rounded-lg shadow hover:bg-sky-600 transition-colors">
              {pack.price}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Note: Coins can be used to send friend request</p>
      </div>
    </div>
  );
};
