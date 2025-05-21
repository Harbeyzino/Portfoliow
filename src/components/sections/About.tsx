import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 md:pl-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I'm <strong className="text-blue-600 dark:text-blue-400">Olaniyan Abiodun</strong>, a passionate web developer 
                with a keen eye for design and a commitment to creating exceptional digital experiences.
              </p>
              
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                With several years of experience in the industry, I've honed my skills in both frontend and backend 
                development, allowing me to build complete, robust web applications from scratch.
              </p>
              
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                My approach to development combines technical expertise with creative problem-solving. I believe that 
                great websites are not just visually appealing but also intuitive, accessible, and performant.
              </p>
              
              <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through mentoring and writing technical articles.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Education</h3>
                  <ul className="space-y-2">
                    <li className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-white">BSc Computer Science</span>
                      <span className="text-gray-600 dark:text-gray-400">University of Technology</span>
                      <span className="text-gray-500 dark:text-gray-500">2016 - 2020</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Experience</h3>
                  <ul className="space-y-2">
                    <li className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-white">Senior Web Developer</span>
                      <span className="text-gray-600 dark:text-gray-400">TechSolutions Inc.</span>
                      <span className="text-gray-500 dark:text-gray-500">2021 - Present</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-white">Frontend Developer</span>
                      <span className="text-gray-600 dark:text-gray-400">Digital Innovations</span>
                      <span className="text-gray-500 dark:text-gray-500">2019 - 2021</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};