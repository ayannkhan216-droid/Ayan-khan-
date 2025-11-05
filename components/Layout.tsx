
import React from 'react';
import Header from './Header';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-pistaa-dark-1 text-gray-900 dark:text-gray-100">
      <div className="max-w-md mx-auto bg-white dark:bg-pistaa-dark-2 shadow-lg min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 pb-16 overflow-y-auto">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
