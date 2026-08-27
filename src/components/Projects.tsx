import React from 'react';
import { Github, BookOpen, Building, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  icon: React.ReactNode;
  features: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured?: boolean;
};

interface ProjectsProps {
  showAll?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ showAll = false }) => {
  const projects: Project[] = [
    {
      title: "Place Finder AI",
      description:
        "An award-winning AI-powered travel discovery platform selected for Cardiff Metropolitan University CST Expo 2026 — top 15 of 200+ submissions. Users can search for destinations using natural language, voice, or images powered by Google Gemini AI, with geospatial proximity search returning results in under 100ms.",
      technologies: [
        "React",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "PostGIS",
        "Google Gemini AI",
        "scikit-learn",
        "Stripe",
        "Pytest",
      ],
      image: "/placefinder.png",
      icon: <Star className="h-8 w-8 text-blue-600" />,
      features: [
        "Google Gemini AI for natural language & image-based search",
        "Geospatial proximity search with results under 100ms",
        "TF-IDF recommendation engine for personalized suggestions",
        "253 automated tests with comprehensive coverage",
      ],
      githubUrl: "https://github.com/Lathurzan/place-finder-ai",
      featured: true,
    },
    {
      title: "Community Health & Services Portal (CHaSP)",
      description:
        "A full-stack platform centralizing community health services to improve accessibility and engagement. Features secure user management, service discovery, AI-driven support, and online payments.",
      technologies: ["React", "TypeScript", "Spring Boot", "MySQL", "Python Flask", "OpenAI API", "Stripe", "PayPal"],
      image: "/chasp.jpeg",
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      features: [
        "JWT-based authentication and role-based access control",
        "AI-powered chatbot for natural language support",
        "Secure online donations and payments",
        "Admin analytics dashboard",
      ],
      githubUrl: "https://github.com/Lathurzan/CHaSP",
    },
    {
      title: "E-Learning Platform for IELTS Students",
      description: "A comprehensive learning management system designed specifically for IELTS preparation with interactive course modules, practice tests, progress tracking, and personalized study plans.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      image: "/ielts-learning-platform.png",
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      features: [
        "Interactive course modules with multimedia content",
        "Real-time progress tracking and analytics",
        "Practice tests with instant feedback",
        "User authentication and role management",
      ],
      githubUrl: "https://github.com/Lathurzan/Online_learning",
    },
    {
      title: "HNV Building Construction Website",
      description: "A professional website for a UK-based construction company, showcasing their services, portfolio, and expertise with optimal performance and user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      image: "/HNv.png",
      icon: <Building className="h-8 w-8 text-blue-600" />,
      features: [
        "Responsive design optimized for all devices",
        "Interactive project gallery with filtering",
        "Contact forms with email integration",
        "SEO optimized for search visibility",
      ],
      githubUrl: "https://github.com/Lathurzan/HNV-Project",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="site-section relative border-t border-slate-800/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="eyebrow">{showAll ? 'Complete Portfolio' : 'Selected Work'}</p>
          <h2 className="section-title">{showAll ? 'Every project, in one place.' : 'Products built to be useful.'}</h2>
          <p className="section-copy">
            {showAll
              ? 'A complete collection of real-world applications showcasing full-stack development, AI integration, and user-focused design.'
              : 'Real-world applications showcasing my expertise in full-stack development, AI integration, and user-focused design.'}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {visibleProjects.map((project, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                project.featured
                  ? 'border-blue-600/50 bg-gradient-to-r from-blue-600/10 to-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-600/20'
                  : 'border-slate-800 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-blue-600/10'
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/30 border border-blue-500/50 backdrop-blur-sm"
                  >
                    <Star className="h-3.5 w-3.5 text-blue-400 fill-blue-400" />
                    <span className="text-xs font-semibold text-blue-300">Award Winning</span>
                  </motion.div>
                </div>
              )}

              <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
                {/* Image */}
                <div className="relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 min-h-[300px] lg:min-h-full">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-40" />
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 sm:p-8 justify-between">
                  {/* Header */}
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`shrink-0 p-3 rounded-lg ${
                        project.featured
                          ? 'bg-blue-600/30'
                          : 'bg-slate-800/50 group-hover:bg-blue-600/20 transition-colors'
                      }`}>
                        <div className="text-blue-400">
                          {project.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-slate-400 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-slate-400 mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 group-hover:border-blue-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-700/50">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        if (project.title === "HNV Building Construction Website") {
                          alert("This GitHub repository is private.");
                        } else {
                          window.open(project.githubUrl, '_blank');
                        }
                      }}
                      className="btn-secondary text-sm flex-1 sm:flex-none"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </motion.button>
                    {project.liveDemoUrl && (
                      <motion.a
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm flex-1 sm:flex-none"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <a href="/portfolio.html" className="btn-primary">
              View all projects
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;