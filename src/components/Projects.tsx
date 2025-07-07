import React from 'react';
import { Github, BookOpen, Building } from 'lucide-react';


const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Learning Platform for IELTS Students",
      description: "A comprehensive campus-based learning management system designed specifically for IELTS preparation. Features include interactive course modules, practice tests, progress tracking, and personalized study plans.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      image: "../../public/ielts-learning-platform.png",
      icon: <BookOpen className="h-8 w-8 text-blue-600 dark:text-teal-400" />,
      features: [
        "Interactive course modules with multimedia content",
        "Real-time progress tracking and analytics",
        "Practice tests with instant feedback",
        "User authentication and role management"
      ],
      githubUrl: "https://github.com/Lathurzan/Online_learning"
    },
    {
      title: "HNV Building Construction Website",
      description: "A professional website for a UK-based construction company, showcasing their services, portfolio, and expertise. Built with modern web technologies to ensure optimal performance and user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      image: "../../public/HNv.png",
      icon: <Building className="h-8 w-8 text-blue-600 dark:text-teal-400" />,
      features: [
        "Responsive design optimized for all devices",
        "Interactive project gallery with filtering",
        "Contact forms with email integration",
        "SEO optimized for better search visibility"
      ],
      githubUrl: "https://github.com/Lathurzan/HNV-Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my expertise through real-world applications and solutions
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3">
                  {project.icon}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </a>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;