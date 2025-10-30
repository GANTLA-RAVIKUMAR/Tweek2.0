import React from 'react';
import { Screen } from '../types';
import { SearchIcon, HistoryIcon, MessageIcon } from './icons';

interface BottomNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  const navItems = [
    { screen: Screen.Main, label: 'Tweek', icon: SearchIcon },
    { screen: Screen.History, label: 'History', icon: HistoryIcon },
    { screen: Screen.Messages, label: 'Messages', icon: MessageIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)] z-10">
      <div className="flex justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeScreen === item.screen;
          const color = isActive ? 'text-sky-500' : 'text-gray-500';
          return (
            <button
              key={item.label}
              onClick={() => setActiveScreen(item.screen)}
              className={`flex flex-col items-center justify-center w-full pt-2 pb-1 ${color} transition-colors duration-200`}
            >
              <item.icon className="w-6 h-6" />
              <span className={`text-xs mt-1 ${isActive ? 'font-semibold' : ''}`}>{item.label}</span>
              {isActive && <div className="w-8 h-0.5 bg-sky-500 mt-1 rounded-full"></div>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
