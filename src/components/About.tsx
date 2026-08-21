import React from 'react';
import { Code2, Lightbulb, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "Expertise in both frontend and backend technologies, creating complete web solutions."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Problem Solver",
      description: "Passionate about analyzing complex problems and developing efficient, scalable solutions."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Focused",
      description: "Committed to writing clean, optimized code that delivers exceptional user experiences."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="about" className="site-section relative border-t border-slate-800/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="eyebrow">The person behind the code</p>
          <h2 className="section-title">Curious by nature. Careful by craft.</h2>
          <p className="section-copy">
            A dedicated software engineer with a passion for creating innovative solutions that make a real impact.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-4">
                Building the future, one line at a time
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a dedicated software engineer with a passion for creating innovative solutions that make a real impact. My journey in technology began with curiosity and has evolved into a commitment to excellence in software development.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-300 leading-relaxed">
                With expertise spanning multiple programming languages including Java, Python, and C++, along with modern web technologies like Node.js, React, and TypeScript, I bring a comprehensive skill set to every project.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-300 leading-relaxed">
                I've had the privilege of working on diverse projects, from educational platforms serving IELTS students to award-winning AI applications and professional websites for international clients. Each project has strengthened my ability to deliver high-quality, user-focused solutions.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
                className="surface-card p-6 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-blue-600/20 p-3 group-hover:bg-blue-600/30 transition-colors">
                    <div className="text-blue-400">
                      {highlight.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {highlight.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats or Quick Facts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-12 border-t border-slate-800"
        >
          {[
            { label: 'Projects Completed', value: '10+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Years Experience', value: '3+' },
            { label: 'Happy Clients', value: '100%' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center sm:text-left"
            >
              <p className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;