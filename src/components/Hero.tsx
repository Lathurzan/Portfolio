import React from 'react';
import { ArrowUpRight, Download, Github, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LogoUrl = '/logo.jpg';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-navy-950 pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Grid Background */}
      <div className="grid-glow pointer-events-none absolute inset-0 opacity-40" />

      <div className="section-inner relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-8 inline-flex w-fit"
            >
              <div className="badge">
                <Sparkles className="h-4 w-4" />
                <span>Available for opportunities</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Software that makes
              <span className="block">
                <span className="gradient-text">complex things</span> simple.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl"
            >
              I'm Lathurzan Subatharan, a software engineer building dependable products with Java, Python, C++, Node.js, React, and TypeScript.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="btn-primary"
              >
                Start a conversation
                <ArrowUpRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadResume}
                className="btn-secondary"
              >
                <Download className="h-5 w-5" />
                Download resume
              </motion.button>
            </motion.div>

            {/* Status and Social */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8 border-t border-slate-800"
            >
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to work</span>
              </div>
              <a
                href="https://github.com/Lathurzan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <Github className="h-4 w-4" />
                <span>github.com/Lathurzan</span>
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            {/* Glow Background */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-blue-600/20 to-blue-600/5 blur-3xl" />
            
            {/* Card Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm p-3 overflow-hidden shadow-2xl shadow-blue-600/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none rounded-2xl" />
              
              <img
                src={LogoUrl}
                alt="Lathurzan Subatharan - Software Engineer"
                className="relative w-full aspect-[4/5] object-cover object-center rounded-xl"
              />

              {/* Overlay Text */}
              <div className="absolute inset-x-3 bottom-3 rounded-lg border border-white/10 bg-gradient-to-t from-navy-950 to-navy-950/50 backdrop-blur-md p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-blue-300 font-semibold">
                  Currently building
                </p>
                <p className="mt-2 font-semibold text-white text-sm">
                  Reliable digital experiences
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech Stack Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-800"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-slate-500 font-semibold mb-4">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {['React', 'TypeScript', 'Node.js', 'Python', 'Java', 'C++'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-slate-300 border border-slate-700 bg-slate-900/30 hover:border-blue-500 hover:text-blue-300 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;