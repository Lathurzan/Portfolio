import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube, Coffee, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      icon: <ExternalLink className="h-6 w-6" />
    },
    {
      name: 'Buy Me a Coffee',
      url: 'https://buymeacoffee.com/lathurzan',
      icon: <Coffee className="h-6 w-6" />
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and potential collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600 dark:text-teal-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Email</p>
                  <a
                    href="mailto:lathurzan@example.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
                  >
                    lathulathurzan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600 dark:text-teal-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
                  >
                    07477732893
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-teal-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Available for Remote Work</p>
                </div>
              </div>
            </div>

              <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex flex-wrap items-center space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    title={link.name}
                    className="relative group flex items-center justify-center p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 dark:hover:bg-teal-600 text-gray-700 dark:text-gray-300 hover:text-white transition-colors cursor-pointer"
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
                ))}
              </div>
            </div>
          </div>

          {/* Message form column */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Send a message</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Have a project idea or question? Send me a message and I'll get back to you.</p>

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
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                <input id="name" name="name" required className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <div className="flex items-center justify-between">
                <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white">
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