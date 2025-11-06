
import React from 'react';
import { HomeIcon, ExploreIcon, AddIcon, users, ReelsIcon } from '../constants';

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
            <ReelsIcon className="w-7 h-7" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-pistaa-dark-3 transition-colors">
          <img src={users[0].avatar} alt="Profile" className="w-7 h-7 rounded-full border-2 border-pistaa-mint" />
        </button>
      </nav>
    </footer>
  );
};

export default BottomNav;