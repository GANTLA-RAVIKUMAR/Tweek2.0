import React from 'react';
import { Screen, User } from '../types';
import { Header } from './Header';
import { BottomNav } from './BottomNav';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
  coins: number;
  chatUser?: User;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeScreen, setActiveScreen, coins, chatUser }) => {
    const showHeader = activeScreen !== Screen.Login;
    const showNav = activeScreen === Screen.Main || activeScreen === Screen.History || activeScreen === Screen.Messages;

  return (
    <div className="max-w-md mx-auto bg-gray-50 h-screen font-sans flex flex-col relative">
      {showHeader && <Header screen={activeScreen} setScreen={setActiveScreen} coins={coins} chatUser={chatUser} />}
      <main className={`flex-grow overflow-y-auto ${showHeader ? 'pt-16' : ''} ${showNav ? 'pb-16' : ''}`}>
        {children}
      </main>
      {showNav && <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />}
    </div>
  );
};
