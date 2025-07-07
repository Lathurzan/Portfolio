import React from 'react';
import { Code, Lightbulb, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-600 dark:text-teal-400" />,
      title: "Full-Stack Development",
      description: "Expertise in both frontend and backend technologies, creating complete web solutions."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600 dark:text-teal-400" />,
      title: "Problem Solver",
      description: "Passionate about analyzing complex problems and developing efficient, scalable solutions."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600 dark:text-teal-400" />,
      title: "Performance Focused",
      description: "Committed to writing clean, optimized code that delivers exceptional user experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate software engineer with a strong foundation in multiple programming languages and frameworks
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a dedicated software engineer with a passion for creating innovative solutions 
                that make a real impact. My journey in technology began with curiosity and has evolved 
                into a commitment to excellence in software development.
              </p>
              <p>
                With expertise spanning multiple programming languages including Java, Python, and C++, 
                along with modern web technologies like Node.js, React, and TypeScript, I bring a 
                comprehensive skill set to every project.
              </p>
              <p>
                I've had the privilege of working on diverse projects, from educational platforms 
                serving IELTS students to professional websites for international clients. Each 
                project has strengthened my ability to deliver high-quality, user-focused solutions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-shrink-0">
                  {highlight.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;