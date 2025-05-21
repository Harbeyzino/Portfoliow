import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "LiveWell Specialists Hospital",
      description: "A comprehensive hospital management system with features for appointment scheduling, patient management, and emergency services. Built with modern web technologies for optimal performance and user experience.",
      category: "fullstack",
      image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      demoUrl: "https://live-well-specialists.vercel.app/",
      githubUrl: "https://github.com/Harbeyzino/LiveWellSpecialists"
    },
    {
      id: 2,
      title: "EphShop - E-commerce Platform",
      description: "A modern e-commerce platform featuring a responsive design, product catalog, shopping cart, and secure checkout process. Implements best practices for performance and user experience.",
      category: "fullstack",
      image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Django", "Python", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://ephemeral-ivory.vercel.app/",
      githubUrl: "https://github.com/Harbeyzino/ephemeral"
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-24 md:pl-24 relative">
      <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-10"></div>
      
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Showcasing my expertise in software engineering through real-world applications.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between">
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center gap-1"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};