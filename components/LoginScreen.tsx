import React from 'react';
import { FacebookIcon, GoogleIcon, UserIcon } from './icons';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white p-8 text-center">
      <div className="bg-sky-500 p-6 rounded-2xl shadow-lg mb-8">
        <h1 className="text-5xl font-bold text-white tracking-wider">TWEEK</h1>
      </div>

      <div className="w-full max-w-xs space-y-4">
        <button onClick={onLogin} className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
          <GoogleIcon />
          Sign in with Google
        </button>
        <button onClick={onLogin} className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
          <FacebookIcon />
          Sign in with Facebook
        </button>
        <button onClick={onLogin} className="w-full flex items-center justify-center bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-yellow-500 transition-colors">
          <UserIcon className="w-5 h-5 mr-2" />
          Continue as guest
        </button>
      </div>

      <div className="mt-12 text-xs text-gray-500">
        <p>By continuing, you are indicating that you accept our</p>
        <p>
          <a href="#" className="underline text-sky-600">Terms of Service</a> and <a href="#" className="underline text-sky-600">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};
