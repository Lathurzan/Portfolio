import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Logo from '../../public/logo.jpg'

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
    link.href = '/Lathurzan-Resume.pdf';
    link.download = 'Lathurzan-Subatharan-Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Lathurzan</span>
              <span className="block text-blue-600 dark:text-teal-400">Subatharan</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Software Engineer | Building Innovative Solutions with Code
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-12">
              Passionate about creating impactful software solutions using Java, Python, C++, Node.js, React, and TypeScript. 
              I transform ideas into robust applications that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors transform hover:scale-105"
              >
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button 
                onClick={downloadResume}
                className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors transform hover:scale-105"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 animate-pulse"></div>
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 animate-spin" style={{ animationDuration: '8s' }}></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 animate-ping" style={{ animationDuration: '3s' }}></div>
              
              {/* Main profile image */}
              <div className="absolute inset-3 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-800">
                <img
                  src={Logo}
                  alt="Lathurzan Subatharan - Software Engineer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay for professional effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
              
              {/* Floating code elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center animate-bounce font-mono" style={{ animationDelay: '0.5s' }}>
                {'<>'}
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-teal-500 rounded text-white text-xs flex items-center justify-center animate-bounce font-mono" style={{ animationDelay: '1s' }}>
                &#123;&#125;
              </div>
              <div className="absolute top-8 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-8 -right-6 w-6 h-6 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;