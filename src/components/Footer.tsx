import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2024 Lathurzan Subatharan. All rights reserved.
              <span className="inline-flex items-center ml-3 text-red-400" aria-hidden="true">
                <Heart className="w-4 h-4" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;