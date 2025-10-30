import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Screen, User, ChatMessage as ChatMessageType } from './types';
import { Layout } from './components/Layout';
import { LoginScreen } from './components/LoginScreen';
import { MainScreen } from './components/MainScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { MessagesScreen } from './components/MessagesScreen';
import { ChatScreen } from './components/ChatScreen';
import { CoinsScreen } from './components/CoinsScreen';
import { SearchingScreen } from './components/SearchingScreen';
import { ScreenProtection } from './components/ScreenProtection';
import { PhoneMissedCallIcon, MicrophoneIcon, MicrophoneOffIcon, VideoCameraIcon, VideoCameraSlashIcon, SendIcon, ChatBubbleIcon } from './components/icons';


const VideoChatMessage: React.FC<{ message: ChatMessageType; user: User }> = ({ message, user }) => {
  const isMe = message.senderId === 'me';
  return (
    <div className={`flex items-start gap-2.5 my-2 animate-fade-in ${isMe ? 'justify-end' : 'justify-start'}`}>
      {!isMe && <img className="w-8 h-8 rounded-full" src={user.avatar} alt={user.name} />}
      <div className={`flex flex-col gap-1 max-w-[80%] p-3 ${isMe ? 'bg-sky-500/90 rounded-s-xl rounded-ee-xl' : 'bg-black/60 rounded-e-xl rounded-es-xl'}`}>
        <p className="text-sm font-normal text-white break-words">{message.text}</p>
      </div>
      {isMe && <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150?u=me" alt="My avatar" />}
    </div>
  );
};

const VideoCallScreen: React.FC<{ user: User; onEndCall: () => void }> = ({ user, onEndCall }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [inputText, setInputText] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
      e.preventDefault();
      if (inputText.trim()) {
        const newMessage: ChatMessageType = {
          id: `vc-msg-${Date.now()}`,
          text: inputText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          senderId: 'me',
        };
        setMessages(prev => [...prev, newMessage]);
        setInputText('');

        setTimeout(() => {
          const reply: ChatMessageType = {
            id: `vc-msg-${Date.now() + 1}`,
            text: `That's interesting!`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            senderId: user.id,
          };
          setMessages(prev => [...prev, reply]);
        }, 1500);
      }
    };

  return (
    <div className="relative h-full w-full bg-black text-white overflow-hidden">
      <img src={user.avatar} className="absolute inset-0 w-full h-full object-cover blur-sm" alt="User video feed" />
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Self-view preview */}
      <div className="absolute top-4 left-4 w-24 h-32 bg-black rounded-lg shadow-lg overflow-hidden z-20">
        <img src="https://i.pravatar.cc/150?u=me" className="w-full h-full object-cover" alt="My video feed" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="p-4 bg-black/20 backdrop-blur-sm">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-gray-300">Live: {formatDuration(callDuration)}</p>
        </div>

        <div className="flex-grow"></div>

        {isChatOpen && (
          <div className={`absolute bottom-0 left-0 right-0 p-4 pt-0 transition-transform duration-300 transform ${isChatOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="max-h-[35vh] overflow-y-auto no-scrollbar flex flex-col-reverse">
              <div>
                {messages.map(msg => <VideoChatMessage key={msg.id} message={msg} user={user} />)}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            <div className="mt-2">
              <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Send a message..."
                  className="flex-grow bg-white/20 rounded-full py-2 px-4 focus:outline-none placeholder-gray-300 text-white"
                />
                <button type="submit" className="bg-sky-500 text-white p-2.5 rounded-full shadow-md hover:bg-sky-600 transition-colors disabled:bg-gray-500" disabled={!inputText.trim()}>
                  <SendIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 flex flex-col space-y-4">
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="p-3 bg-black/50 rounded-full backdrop-blur-sm">
            <ChatBubbleIcon className="w-6 h-6" />
        </button>
        <button onClick={() => setIsMuted(!isMuted)} className="p-3 bg-black/50 rounded-full backdrop-blur-sm">
            {isMuted ? <MicrophoneOffIcon className="w-6 h-6" /> : <MicrophoneIcon className="w-6 h-6" />}
        </button>
        <button onClick={() => setIsCameraOff(!isCameraOff)} className="p-3 bg-black/50 rounded-full backdrop-blur-sm">
            {isCameraOff ? <VideoCameraSlashIcon className="w-6 h-6" /> : <VideoCameraIcon className="w-6 h-6" />}
        </button>
        <button onClick={onEndCall} className="p-3 bg-red-500 rounded-full">
            <PhoneMissedCallIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};


function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Login);
  const [coins, setCoins] = useState(50);
  const [chatUser, setChatUser] = useState<User | undefined>(undefined);

  const handleLogin = () => {
    setActiveScreen(Screen.Main);
  };

  const handleStartChat = (user: User) => {
    setChatUser(user);
    setActiveScreen(Screen.Chat);
  };

  const handleStartSearch = () => {
    setActiveScreen(Screen.Searching);
  };

  const handleMatchFound = (user: User) => {
    setChatUser(user);
    setActiveScreen(Screen.VideoCall);
  };

  const handleEndCall = () => {
    setActiveScreen(Screen.Main);
    setChatUser(undefined);
  };

  const handleStartCall = () => {
    if (chatUser) {
        setActiveScreen(Screen.VideoCall);
    }
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case Screen.Login:
        return <LoginScreen onLogin={handleLogin} />;
      case Screen.Main:
        return <MainScreen onStartSearch={handleStartSearch} />;
      case Screen.History:
        return <HistoryScreen coins={coins} setCoins={setCoins} />;
      case Screen.Messages:
        return <MessagesScreen onSelectChat={handleStartChat} />;
      case Screen.Chat:
        if (!chatUser) {
            setActiveScreen(Screen.Messages);
            return null;
        }
        return <ChatScreen user={chatUser} />;
      case Screen.Coins:
        return <CoinsScreen coins={coins} />;
      case Screen.Searching:
        return <SearchingScreen onMatchFound={handleMatchFound} />;
      case Screen.VideoCall:
        if (!chatUser) {
            setActiveScreen(Screen.Main);
            return null;
        }
        return (
            <ScreenProtection>
                <VideoCallScreen user={chatUser} onEndCall={handleEndCall} />
            </ScreenProtection>
        );
      default:
        return <MainScreen onStartSearch={handleStartSearch} />;
    }
  };

  return (
    <Layout 
      activeScreen={activeScreen} 
      setActiveScreen={setActiveScreen} 
      coins={coins}
      chatUser={chatUser}
      onStartCall={handleStartCall}
    >
      {renderScreen()}
    </Layout>
  );
}

export default App;