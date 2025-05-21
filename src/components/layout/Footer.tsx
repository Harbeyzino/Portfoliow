import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-white dark:bg-gray-900 relative md:pl-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">OA</div>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Olaniyan Abiodun. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="mx-1 text-red-500 animate-pulse" />
            <span>by Olaniyan Abiodun</span>
          </div>
        </div>
      </div>
    </footer>
  );
};