import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [notice, setNotice] = useState<{ open: boolean; message: string }>({ open: false, message: '' });

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/lathurzan',
      icon: <Github className="h-6 w-6" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lathurzan-subatharan-b774a8347/',
      icon: <Linkedin className="h-6 w-6" />
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@zansubrow?si=k_qUO168hNxYLU7m',
      icon: <Youtube className="h-6 w-6" />
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/lathurzan',
      icon: <ExternalLink className="h-6 w-6" />
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'lathulathurzan@gmail.com',
      href: 'mailto:lathulathurzan@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '07477732893',
      href: 'tel:+447477732893'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'Available for Remote Work',
      href: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
    <section id="contact" className="site-section relative border-t border-slate-800/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="eyebrow">Let's Connect</p>
          <h2 className="section-title">Have a problem worth solving?</h2>
          <p className="section-copy">
            Ready to collaborate on your next project? I'm interested in discussing new opportunities, innovative ideas, and potential partnerships.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Get in Touch
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Whether you have a question or just want to say hi, feel free to get in touch.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href || '#'}
                  onClick={(e) => !info.href && e.preventDefault()}
                  variants={itemVariants}
                  whileHover={info.href ? { x: 4 } : {}}
                  className={`group surface-card p-5 flex items-start gap-4 transition-all ${
                    info.href ? 'cursor-pointer hover:border-blue-600/50' : 'cursor-default'
                  }`}
                >
                  <div className="shrink-0 p-3 rounded-lg bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors text-blue-400">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="mt-1 text-lg font-medium text-white group-hover:text-blue-300 transition-colors truncate">
                      {info.value}
                    </p>
                  </div>
                  {info.href && (
                    <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Follow Me
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-3 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-400 hover:border-blue-500 hover:bg-slate-900 hover:text-blue-400 transition-all"
                  >
                    <div className="text-slate-400 group-hover:text-blue-400 transition-colors">
                      {link.icon}
                    </div>
                    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 text-xs font-medium bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <div className="rounded-2xl border border-blue-600/30 bg-gradient-to-br from-blue-600/20 to-transparent p-8 sm:p-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to work together?
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    I'm currently available for freelance projects, contract work, and full-time opportunities. Let's create something amazing together.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const mailtoLink = document.createElement('a');
                    mailtoLink.href = 'mailto:lathulathurzan@gmail.com?subject=Let\'s Work Together';
                    mailtoLink.click();
                  }}
                  className="btn-primary w-full justify-center"
                >
                  <Send className="h-5 w-5" />
                  Send an Email
                </motion.button>

                <motion.a
                  href="https://www.linkedin.com/in/lathurzan-subatharan-b774a8347/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary w-full justify-center"
                >
                  <Linkedin className="h-5 w-5" />
                  Message on LinkedIn
                </motion.a>
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 p-6 rounded-lg border border-slate-800 bg-slate-900/50"
            >
              <p className="text-sm text-slate-400">
                <span className="font-semibold text-slate-300">Response Time:</span> I typically respond within 24 hours during business days.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Notice Modal */}
      {notice.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setNotice({ open: false, message: '' })}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 z-10"
          >
            <h4 className="text-lg font-semibold text-white mb-2">Notice</h4>
            <p className="text-slate-300 mb-6">{notice.message}</p>
            <button
              onClick={() => setNotice({ open: false, message: '' })}
              className="btn-primary w-full justify-center"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;
