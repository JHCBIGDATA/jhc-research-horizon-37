
import { motion } from 'framer-motion';
import LogoLoader from './LogoLoader';

export const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
  </div>
);

export const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <motion.div
      className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export { default as LogoLoader } from './LogoLoader';
