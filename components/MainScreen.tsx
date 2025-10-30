import React from 'react';

export const MainScreen: React.FC = () => {
  return (
    <div className="relative h-full flex flex-col items-center justify-center text-white">
      <div className="absolute inset-0 bg-black">
        <img
          src="https://picsum.photos/seed/couple/400/800"
          alt="Couple silhouette"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-32">
        <button className="bg-white text-sky-600 font-bold text-lg py-3 px-16 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
          START
        </button>
      </div>
    </div>
  );
};
