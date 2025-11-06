
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { BellIcon, LogoutIcon } from './Icons';

interface HeaderProps {
  currentPage: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onLogout }) => {
  return (
    <header className="h-20 bg-light-header dark:bg-dark-header flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">{currentPage}</h1>
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 p-2 pl-10 rounded-lg bg-gray-100 dark:bg-gray-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-accent-blue"
          />
           <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <ThemeToggle />

        <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Notifications">
          <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-light-header dark:border-dark-header"></span>
        </button>

        <div className="flex items-center space-x-3">
          <img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40?img=6" alt="User" />
          <div>
            <p className="font-semibold text-sm">Alex Ray</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

        <button onClick={onLogout} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Logout">
            <LogoutIcon className="w-6 h-6 text-gray-600 dark:text-gray-300"/>
        </button>
      </div>
    </header>
  );
};

export default Header;
