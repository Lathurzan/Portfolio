import React from 'react';
import { Github, BookOpen, Building, ArrowUpRight } from 'lucide-react';
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
};


const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Community Health & Services Portal (CHaSP)",
      description:
        "A full-stack platform centralizing community health services to improve accessibility and engagement. Features secure user management, service discovery, AI-driven support, and online payments.",
      technologies: ["React", "TypeScript", "Spring Boot", "MySQL", "Python Flask", "OpenAI API", "Stripe", "PayPal"],
      image: "/chasp.jpeg",
      icon: <BookOpen className="h-8 w-8 text-blue-600 dark:text-teal-400" />,
      features: [
        "JWT-based authentication and role-based access control",
        "AI-powered chatbot for natural language support",
        "Secure online donations and payments (Stripe & PayPal)",
        "Admin analytics dashboard for monitoring usage"
      ],
      githubUrl: "https://github.com/Lathurzan/CHaSP"
    },
    {
      title: "E-Learning Platform for IELTS Students",
      description: "A comprehensive campus-based learning management system designed specifically for IELTS preparation. Features include interactive course modules, practice tests, progress tracking, and personalized study plans.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
  image: "/ielts-learning-platform.png",
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
  image: "/HNv.png",
      icon: <Building className="h-8 w-8 text-blue-600 dark:text-teal-400" />,
      features: [
        "Responsive design optimized for all devices",
        "Interactive project gallery with filtering",
        "Contact forms with email integration",
        "SEO optimized for better search visibility"
      ],
  githubUrl: "https://github.com/Lathurzan/HNV-Project"
    }
    ,
    {
      title: "Place Finder AI",
      description:
        "An award-winning AI-powered travel discovery platform selected for Cardiff Metropolitan University CST Expo 2026 — top 15 of 200+ submissions. Users can search for destinations using natural language, voice, or images powered by Google Gemini AI, with geospatial proximity search returning results in under 100ms and a personalised TF-IDF recommendation engine.",
      technologies: [
        "React",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "PostGIS",
        "Google Gemini AI",
        "scikit-learn",
        "Stripe",
        "Tailwind CSS",
        "Leaflet.js",
        "JWT",
        "Python",
        "Pytest",
      ],
      image: "/placefinder.png",
      icon: <Github className="h-8 w-8 text-blue-600 dark:text-teal-400" />,
      features: [
        "Google Gemini AI for natural language search, voice input, and image-based destination recognition",
        "Geospatial proximity search with PostgreSQL 15 + PostGIS returning results in under 100ms",
        "TF-IDF cosine similarity recommendation engine for personalised place suggestions",
        "Stripe subscription payments with JWT authentication and async FastAPI backend",
        "253 automated tests — 129 pytest unit/integration tests and 124 Postman API tests",
      ],
      githubUrl: "https://github.com/Lathurzan/place-finder-ai",
      liveDemoUrl: "",
    }
  ];

  const projectHasLiveDemo = (project: typeof projects[number]): project is typeof projects[number] & { liveDemoUrl: string } =>
    'liveDemoUrl' in project && typeof project.liveDemoUrl === 'string';

  return (
    <section id="projects" className="site-section">
      <div className="section-inner">
        <div className="mb-14">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Products built to be useful.</h2>
          <p className="section-copy">
            Showcasing my expertise through real-world applications and solutions
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .15 }}
              transition={{ duration: .45, delay: index * .08 }}
              key={index}
              className="surface-card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-xl hover:shadow-blue-950/30"
            >
              <div className="relative overflow-hidden border-b border-slate-800">
                <img src={project.image} alt={project.title} loading="lazy" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-sky-400/10 p-2">{project.icon}</div>
                  <h3 className="pt-1 text-xl font-bold leading-tight text-white sm:text-2xl">
                    {project.title}
                  </h3>
                </div>
                
                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-slate-500">Key features</h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm leading-6 text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <button
                    onClick={() => {
                      if (project.title === "HNV Building Construction Website") {
                        alert("This GitHub repository is private.");
                      } else {
                        window.open(project.githubUrl, '_blank');
                      }
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </button>
<<<<<<< HEAD
                  {project.liveDemoUrl && (
                    <a
                    href={project.liveDemoUrl}
=======
                  {projectHasLiveDemo(project) && (
                    <a
                      href={project.liveDemoUrl}
>>>>>>> 76172b1 (change the animation and designs.)
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                    >
                      Live Demo <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;