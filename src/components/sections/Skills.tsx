import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend Skills
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React', level: 92, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend' },
    
    // Backend Skills
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express', level: 82, category: 'backend' },
    { name: 'MongoDB', level: 80, category: 'backend' },
    { name: 'PostgreSQL', level: 78, category: 'backend' },
    { name: 'GraphQL', level: 75, category: 'backend' },
    
    // Tools & Others
    { name: 'Git/GitHub', level: 88, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'AWS', level: 65, category: 'tools' },
    { name: 'Figma', level: 75, category: 'tools' },
    { name: 'Testing', level: 80, category: 'tools' },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & Others' },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 md:pl-24 relative bg-gray-50 dark:bg-gray-800">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-teal-100 dark:bg-teal-900 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div 
                      key={skill.name} 
                      className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-5 transform hover:translate-y-[-2px] transition-transform duration-300"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-medium text-gray-800 dark:text-white">{skill.name}</h4>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};