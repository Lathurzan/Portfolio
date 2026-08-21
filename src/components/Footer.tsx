import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/lathurzan', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://www.linkedin.com/in/lathurzan-subatharan-b774a8347/', label: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, url: 'mailto:lathulathurzan@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-slate-800/50 bg-navy-950">
      <div className="section-inner">
        <div className="grid gap-12 md:gap-16 md:grid-cols-[1.5fr_1fr_1fr] mb-12 pb-12 border-b border-slate-800/50">
          {/* Brand and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">LS</span>
              </div>
              <h3 className="text-xl font-bold text-white">Lathurzan</h3>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Building premium digital experiences with modern technologies. Specialized in full-stack development, AI integration, and user-focused design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-400 hover:border-blue-500 hover:bg-slate-900 hover:text-blue-400 transition-all"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="text-center sm:text-left">
            <p className="text-sm text-slate-500">
              © {currentYear} Lathurzan Subatharan. All rights reserved.
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Crafted with precision and passion.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-3 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-400 hover:border-blue-500 hover:bg-slate-900 hover:text-blue-400 transition-all"
            title="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;