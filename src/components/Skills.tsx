import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 80 },
        { name: "Python", level: 75 },
        { name: "C++", level: 80 },
        {name : "C#", level: 70  },
        { name: "TypeScript", level: 68 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", level: 70 },
        { name: "Node.js", level: 75 },
        { name: "HTML/CSS", level: 95 },
        { name: "Express.js", level: 72 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 78 },
        { name: "Docker", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "MySQL", level: 72 },
        { name: "AWS", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="site-section bg-slate-900/40">
      <div className="section-inner">
        <div className="mb-14">
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title">Technologies I reach for.</h2>
          <p className="section-copy">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: categoryIndex * .08 }} key={categoryIndex} className="surface-card p-6">
              <h3 className="mb-7 text-xl font-bold text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-800">
                      <div
                        className="h-1.5 rounded-full bg-sky-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;