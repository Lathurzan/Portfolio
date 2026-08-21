import React from 'react';
import { ArrowUpRight, Download, Github, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
// Public assets are served from the public folder; reference them by path string (no import) so TypeScript won't try to resolve the module.
const LogoUrl = '/logo.jpg';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
  // Serve the resume from the public folder (root path)
  link.href = '/Resume.pdf';
  link.download = 'Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="grid-glow pointer-events-none absolute inset-0 opacity-80" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="section-inner relative grid items-center gap-16 pb-20 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1.5 text-sm text-sky-300">
              <Sparkles className="h-4 w-4" /> Available for thoughtful collaborations
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl">
              Software that makes <span className="text-sky-400">complex things</span> feel simple.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I&apos;m Lathurzan Subatharan, a software engineer building dependable products with Java, Python, C++, Node.js, React, and TypeScript.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Start a conversation <ArrowUpRight className="h-5 w-5" />
              </button>
              <button
                onClick={downloadResume}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-5 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-white"
              >
                Download resume <Download className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-500 lg:justify-start">
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to work</span>
              <a href="https://github.com/Lathurzan" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-sky-400"><Github className="h-4 w-4" /> github.com/Lathurzan</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] bg-blue-600/10 blur-2xl" />
            <div className="surface-card relative overflow-hidden p-3 shadow-2xl shadow-blue-950/40">
                <img
                  src={LogoUrl}
                  alt="Lathurzan Subatharan - Software Engineer"
                  className="aspect-[4/5] w-full rounded-xl object-cover object-center transition duration-700 hover:scale-105"
                />
              <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[.18em] text-sky-300">Currently building</p>
                <p className="mt-1 font-medium text-white">Reliable digital experiences</p>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default Hero;