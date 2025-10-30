import React, { useState, useEffect } from 'react';
import { ShieldCheckIcon } from './icons';

export const ScreenProtection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isProtected, setIsProtected] = useState(document.hidden);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsProtected(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {children}
      {isProtected && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center text-white p-8 text-center" aria-hidden="true">
          <div className="flex flex-col items-center">
            <ShieldCheckIcon className="w-16 h-16 text-sky-400 mb-4" />
            <h2 className="text-2xl font-bold">Privacy Protection Enabled</h2>
            <p className="mt-2 text-gray-300">
              Content is hidden to prevent screen capture and protect user privacy.
            </p>
            <p className="mt-4 text-sm text-gray-400">Please return to the app window to continue.</p>
          </div>
        </div>
      )}
    </>
  );
};