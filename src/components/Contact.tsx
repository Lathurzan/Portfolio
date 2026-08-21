import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube, Coffee, ExternalLink } from 'lucide-react';

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
      name: 'Fiverr',
      url: 'https://www.fiverr.com/lathutech/buying?source=avatar_menu_profile',
      icon: <ExternalLink className="h-6 w-6" />,
      disabled: true,
      message: 'This service is not available at this time.'
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/lathurzan',
      icon: <ExternalLink className="h-6 w-6" />
    }
  ];

  return (
    <section id="contact" className="site-section border-t border-slate-800/70 bg-slate-900/30">
      <div className="section-inner">
        <div className="mb-14">
          <p className="eyebrow">Let&apos;s connect</p>
          <h2 className="section-title">Have a problem worth solving?</h2>
          <p className="section-copy">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white">
                Let's Connect
              </h3>
              <p className="mb-8 leading-7 text-slate-400">
                I'm always interested in discussing new opportunities, innovative projects, 
                and potential collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-sky-400" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a
                    href="mailto:lathulathurzan@gmail.com"
                    className="text-slate-400 transition-colors hover:text-sky-400"
                  >
                    lathulathurzan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-sky-400" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-slate-400 transition-colors hover:text-sky-400"
                  >
                    07477732893
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-sky-400" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-slate-400">Available for Remote Work</p>
                </div>
              </div>
            </div>

              <div className="pt-8">
              <h4 className="mb-4 text-lg font-semibold text-white">
                Follow Me
              </h4>
              <div className="flex flex-wrap items-center space-x-4">
                {socialLinks.map((link, index) => (
                  link.disabled ? (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setNotice({ open: true, message: link.message || 'This service is not available at this time.' })}
                      aria-label={link.name}
                      title={link.name}
                      className="relative group flex items-center justify-center rounded-lg border border-slate-800 p-3 text-slate-600"
                      aria-disabled="true"
                    >
                      {React.cloneElement(link.icon as React.ReactElement, {
                        className: 'h-6 w-6',
                        role: 'img',
                        'aria-hidden': false
                      })}

                      <span className="pointer-events-none absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity dark:bg-white dark:text-black">
                        {link.name}
                      </span>
                    </button>
                  ) : (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      title={link.name}
                      className="relative group flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-slate-400 transition hover:border-sky-400 hover:bg-blue-600 hover:text-white"
                    >
                      {/* Icon */}
                      {React.cloneElement(link.icon as React.ReactElement, {
                        className: 'h-6 w-6',
                        role: 'img',
                        'aria-hidden': false
                      })}

                      {/* Tooltip label shown on hover */}
                      <span className="pointer-events-none absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity dark:bg-white dark:text-black">
                        {link.name}
                      </span>
                    </a>
                  )
                ))}
                {notice.open && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setNotice({ open: false, message: '' })} />
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full mx-4 p-6 z-10">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Notice</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{notice.message}</p>
                      <div className="flex justify-end">
                        <button
                          onClick={() => setNotice({ open: false, message: '' })}
                          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Message form column */}
          <div className="surface-card p-6 sm:p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">Send a message</h3>
            <p className="mb-6 text-slate-400">Have a project idea or question? Send me a message and I'll get back to you.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);
                const name = String(formData.get('name') || '');
                const email = String(formData.get('email') || '');
                const message = String(formData.get('message') || '');
                const subject = encodeURIComponent(`Contact from ${name}`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
                window.location.href = `mailto:lathulathurzan@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
                <input id="name" name="name" required className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400" />
              </div>

              <div className="flex items-center justify-between">
                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-500">
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;