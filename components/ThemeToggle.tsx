
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../App';
import { SunIcon, MoonIcon } from './Icons';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-16 h-8 rounded-full p-1 flex items-center bg-gray-200 dark:bg-gray-700 relative"
      aria-label="Toggle theme"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
          style={{ left: theme === 'light' ? '4px' : 'auto', right: theme === 'dark' ? '4px' : 'auto' }}
        >
          {theme === 'light' ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-slate-300" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
