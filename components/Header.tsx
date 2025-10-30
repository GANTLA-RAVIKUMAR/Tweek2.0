import React, { useState, useEffect, useRef } from 'react';
import { Screen, User } from '../types';
import { CoinIcon, UserPlusIcon, MoreVerticalIcon, ArrowLeftIcon, VideoCameraIcon } from './icons';

interface HeaderProps {
  screen: Screen;
  setScreen: (screen: Screen) => void;
  coins: number;
  chatUser?: User;
  onStartCall: () => void;
}

export const Header: React.FC<HeaderProps> = ({ screen, setScreen, coins, chatUser, onStartCall }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderHeaderContent = () => {
    switch (screen) {
      case Screen.Chat:
        return (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <button onClick={() => setScreen(Screen.Messages)} className="p-2 -ml-2 text-gray-600">
                <ArrowLeftIcon className="w-6 h-6" />
              </button>
              <img src={chatUser?.avatar} alt={chatUser?.name} className="w-8 h-8 rounded-full ml-2" />
              <span className="ml-3 font-semibold text-gray-800">{chatUser?.name}</span>
            </div>
            <div className="relative" ref={menuRef}>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 -mr-2 text-gray-600">
                <MoreVerticalIcon className="w-6 h-6" />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <button
                    onClick={() => {
                      onStartCall();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <VideoCameraIcon className="w-5 h-5 mr-3" />
                    Video Call
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      case Screen.Coins:
        return (
            <div className="flex items-center w-full">
                <button onClick={() => setScreen(Screen.Main)} className="p-2 -ml-2 text-gray-600">
                    <ArrowLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-bold text-gray-800 ml-4">Buy Coins</h1>
            </div>
        );
      default:
        const title = screen === Screen.Main ? 'Tweek' : screen.toString();
        return (
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-bold text-sky-600">{title}</h1>
            <div className="flex items-center space-x-3">
              <button onClick={() => setScreen(Screen.Coins)} className="flex items-center bg-yellow-400 text-white px-2 py-1 rounded-full text-sm shadow-md">
                <CoinIcon className="w-5 h-5" />
                <span className="ml-1 font-bold">{coins}</span>
              </button>
              <button className="text-gray-600">
                <UserPlusIcon className="w-6 h-6" />
              </button>
              <button className="text-gray-600">
                <MoreVerticalIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="max-w-md mx-auto h-16 flex items-center px-4">
        {renderHeaderContent()}
      </div>
    </header>
  );
};