import React from 'react';
import { User } from '../types';
import { MOCK_USERS } from '../constants';

interface SearchingScreenProps {
  onMatchFound: (user: User) => void;
}

export const SearchingScreen: React.FC<SearchingScreenProps> = ({ onMatchFound }) => {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            // Pick a random user to "match" with
            const matchedUser = MOCK_USERS[Math.floor(Math.random() * MOCK_USERS.length)];
            onMatchFound(matchedUser);
        }, 3000); // Simulate a 3-second search

        return () => clearTimeout(timer);
    }, [onMatchFound]);

    return (
        <div className="flex flex-col items-center justify-center h-full bg-sky-500 text-white">
            <div className="relative w-40 h-40">
                <div className="absolute inset-0 rounded-full border-4 border-white border-opacity-50"></div>
                <div className="absolute inset-0 rounded-full border-4 border-white border-opacity-50 animate-ping"></div>
                <img src="https://i.pravatar.cc/150?u=me" alt="My avatar" className="w-full h-full rounded-full" />
            </div>
            <h2 className="text-2xl font-bold mt-8 animate-pulse">Searching...</h2>
            <p className="mt-2 text-sky-100">Connecting you with someone new</p>
        </div>
    );
};
