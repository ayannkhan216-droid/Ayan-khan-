
import React from 'react';
import { useTheme } from '../App';
import { MessageIcon, HeartIcon } from '../constants';

const Header: React.FC = () => {
    const { toggleTheme } = useTheme();
  return (
    <header className="fixed top-0 left-0 right-0 max-w-md mx-auto bg-white/80 dark:bg-pistaa-dark-2/80 backdrop-blur-md border-b border-gray-200 dark:border-pistaa-dark-3 z-10">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-pistaa-gradient flex items-center justify-center text-white font-bold text-xl">
                P
            </div>
            <h1 className="text-2xl font-bold ml-2 tracking-tighter bg-clip-text text-transparent bg-pistaa-gradient">
                Pistaa
            </h1>
        </div>
        <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-pistaa-mint">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </button>
          <button className="relative">
            <HeartIcon className="w-7 h-7" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-pistaa-dark-2"></span>
          </button>
          <button>
            <MessageIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
