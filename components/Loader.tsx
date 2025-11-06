

import React from 'react';
// FIX: Import Variants from framer-motion to provide an explicit type for variant objects, resolving TypeScript errors with transition properties.
import { motion, Variants } from 'framer-motion';
import { LogoIcon } from './Icons';

const loaderVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.5, delay: 0.5 }
  },
};

const logoVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 360],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
};

const Loader: React.FC = () => {
  return (
    <motion.div
      variants={loaderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-light-bg dark:bg-dark-bg"
    >
      <motion.div variants={logoVariants} animate="animate">
        <LogoIcon className="h-20 w-20 text-accent-blue" />
      </motion.div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
        className="mt-4 text-lg font-medium text-gray-600 dark:text-gray-400"
      >
        Loading Analytics...
      </motion.p>
    </motion.div>
  );
};

export default Loader;