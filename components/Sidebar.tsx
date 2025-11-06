
import React from 'react';
import { motion } from 'framer-motion';
import { LogoIcon, HomeIcon, ChartBarIcon, DocumentReportIcon, SettingsIcon } from './Icons';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const navItems = [
  { name: 'Dashboard', icon: HomeIcon },
  { name: 'Analytics', icon: ChartBarIcon },
  { name: 'Reports', icon: DocumentReportIcon },
  { name: 'Settings', icon: SettingsIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <aside className="w-64 bg-light-sidebar dark:bg-dark-sidebar flex flex-col flex-shrink-0">
      <div className="flex items-center justify-center h-20 border-b border-gray-200 dark:border-gray-700">
        <LogoIcon className="w-8 h-8 text-accent-blue" />
        <span className="ml-3 text-2xl font-semibold text-gray-800 dark:text-white">Dash.</span>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul>
          {navItems.map(item => (
            <li key={item.name} className="mb-2">
              <button
                onClick={() => setCurrentPage(item.name)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  currentPage === item.name
                    ? 'bg-accent-blue text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="ml-4 font-medium">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-gray-700">
              <h4 className="font-bold text-gray-800 dark:text-white">Upgrade Plan</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Go Pro for more features and advanced analytics.</p>
              <button className="mt-3 w-full bg-accent-blue text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600">
                  Upgrade
              </button>
          </div>
      </div>
    </aside>
  );
};

export default Sidebar;
