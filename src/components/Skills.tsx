import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code2, Cloud, Zap, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-5 w-5" />,
      skills: ["Java", "Python", "C++", "C#", "TypeScript", "JavaScript"]
    },
    {
      title: "Frontend",
      icon: <Zap className="h-5 w-5" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: <Database className="h-5 w-5" />,
      skills: ["Node.js", "Express.js", "Spring Boot", "FastAPI", "Flask"]
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "PostGIS"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["AWS", "Docker", "Git", "GitHub", "CI/CD"]
    },
    {
      title: "AI & Tools",
      icon: <Brain className="h-5 w-5" />,
      skills: ["Google Gemini", "OpenAI API", "scikit-learn", "Stripe", "Pytest"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="skills-section site-section relative border-t">
      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="eyebrow">Technical Expertise</p>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-copy">
            A comprehensive toolkit across multiple languages, frameworks, and platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group surface-card p-6 hover:border-blue-600/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="skill-icon p-2 rounded-lg transition-colors">
                  {category.icon}
                </div>
                <h3 className="skill-heading text-lg font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="skill-pill px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="learning-panel mt-16 p-8 rounded-2xl border"
        >
          <h3 className="learning-heading text-lg font-semibold mb-3">
            Always Learning
          </h3>
          <p className="learning-copy">
            I'm passionate about staying current with emerging technologies and best practices. I regularly contribute to open-source projects and explore new frameworks to expand my technical capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;