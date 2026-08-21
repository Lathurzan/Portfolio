import React from 'react';
import { Code, Lightbulb, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="about" className="site-section border-t border-slate-800/70">
      <div className="section-inner">
        <div className="mb-14">
          <p className="eyebrow">The person behind the code</p>
          <h2 className="section-title">Curious by nature. Careful by craft.</h2>
          <p className="section-copy">
            A passionate software engineer with a strong foundation in multiple programming languages and frameworks
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">
              My Journey
            </h3>
            <div className="space-y-5 leading-8 text-slate-400">
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

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((highlight, index) => (
              <motion.div whileHover={{ y: -4 }} transition={{ duration: .2 }} key={index} className="surface-card flex items-start gap-4 p-5">
                <div className="shrink-0 rounded-lg bg-sky-400/10 p-3">
                  {highlight.icon}
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-white">
                    {highlight.title}
                  </h4>
                  <p className="text-sm leading-6 text-slate-400">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;