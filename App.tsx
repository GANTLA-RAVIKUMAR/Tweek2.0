import React, { useState } from 'react';
import { Screen, User } from './types';
import { Layout } from './components/Layout';
import { LoginScreen } from './components/LoginScreen';
import { MainScreen } from './components/MainScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { MessagesScreen } from './components/MessagesScreen';
import { ChatScreen } from './components/ChatScreen';
import { CoinsScreen } from './components/CoinsScreen';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Login);
  const [coins, setCoins] = useState<number>(50); // Start with some coins
  const [selectedChatUser, setSelectedChatUser] = useState<User | undefined>(undefined);

  const handleLogin = () => {
    setActiveScreen(Screen.Main);
  };

  const handleSelectConversation = (user: User) => {
    setSelectedChatUser(user);
    setActiveScreen(Screen.Chat);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case Screen.Login:
        return <LoginScreen onLogin={handleLogin} />;
      case Screen.Main:
        return <MainScreen />;
      case Screen.History:
        return <HistoryScreen coins={coins} setCoins={setCoins} />;
      case Screen.Messages:
        return <MessagesScreen onSelectConversation={handleSelectConversation} />;
      case Screen.Chat:
        return selectedChatUser ? <ChatScreen user={selectedChatUser} /> : <MessagesScreen onSelectConversation={handleSelectConversation} />;
      case Screen.Coins:
        return <CoinsScreen coins={coins} />;
      default:
        return <MainScreen />;
    }
  };

  if (activeScreen === Screen.Login) {
    return <div className="max-w-md mx-auto bg-white h-screen font-sans"><LoginScreen onLogin={handleLogin} /></div>
  }

  return (
    <Layout
      activeScreen={activeScreen}
      setActiveScreen={setActiveScreen}
      coins={coins}
      chatUser={selectedChatUser}
    >
      {renderScreen()}
    </Layout>
  );
};

export default App;
