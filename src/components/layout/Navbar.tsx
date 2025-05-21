import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Home, User, Code, Briefcase, Mail } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={20} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    checkMobile();
    handleScroll();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );

  const DesktopNav = () => (
    <aside className="fixed left-0 top-0 h-full w-16 md:w-20 bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center py-8 z-10 transition-all duration-300">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-10">OA</div>
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex flex-col items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <div className="p-2 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-gray-800 transition-colors duration-300">
                {item.icon}
              </div>
              <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );

  const MobileNav = () => (
    <nav className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-10 transition-all duration-300 ${scrolled ? 'translate-y-0' : ''}`}>
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex flex-col items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 px-2 py-1"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );

  return (
    <>
      <ThemeToggle />
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </>
  );
};