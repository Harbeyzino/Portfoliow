import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Twitter } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 md:pt-0 md:pl-24 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-80 h-80 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 leading-tight animate-fadeIn">
              <span className="text-blue-600 dark:text-blue-400">Olaniyan</span> Abiodun
            </h1>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mb-6 animate-growWidth"></div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6 animate-fadeIn animation-delay-300">
              Professional <span className="text-blue-600 dark:text-blue-400">Software Engineer</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed animate-fadeIn animation-delay-500">
              I specialize in building scalable, enterprise-level applications with a focus on performance, security, and maintainability.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-8 animate-fadeIn animation-delay-500">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Twitter Profile"
              >
                <Twitter size={24} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-700">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
              >
                View Projects
              </a>
              <a 
                href="/path-to-your-cv.pdf" 
                download
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fadeInUp">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full mx-auto overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <div className="h-full w-full flex items-center justify-center text-white text-6xl font-bold">
                  OA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};