
import React from 'react';
import { HomeIcon, ExploreIcon, AddIcon, users } from '../constants';

const BottomNav: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 dark:bg-pistaa-dark-2/80 backdrop-blur-md border-t border-gray-200 dark:border-pistaa-dark-3 z-10">
      <nav className="flex items-center justify-around h-16">
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-pistaa-dark-3 transition-colors">
          <HomeIcon className="w-7 h-7" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-pistaa-dark-3 transition-colors">
          <ExploreIcon className="w-7 h-7" />
        </button>
        <button className="p-2 rounded-full bg-pistaa-gradient text-white transform hover:scale-110 transition-transform">
          <AddIcon className="w-8 h-8" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-pistaa-dark-3 transition-colors">
            {/* Placeholder for notifications or another icon */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 5.636a9 9 0 0112.728 0m-12.728 0a5 5 0 017.072 0" />
            </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-pistaa-dark-3 transition-colors">
          <img src={users[0].avatar} alt="Profile" className="w-7 h-7 rounded-full border-2 border-pistaa-mint" />
        </button>
      </nav>
    </footer>
  );
};

export default BottomNav;
