import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const fullText = 'Lathurzan Subatharan';
  const typingSpeed = 100; // milliseconds per character
  const pauseAfterTyping = 800; // pause after typing completes
  const fadeOutDuration = 600; // fade out duration

  useEffect(() => {
    let currentIndex = 0;
    let typingTimer: ReturnType<typeof setTimeout>;
    let cursorTimer: ReturnType<typeof setInterval>;
    let completeTimer: ReturnType<typeof setTimeout>;
    let fadeTimer: ReturnType<typeof setTimeout>;

    // Cursor blinking effect
    const startCursorBlink = () => {
      cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
    };

    // Start cursor blinking immediately
    startCursorBlink();

    // Typing effect
    const typeNextCharacter = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        typingTimer = setTimeout(typeNextCharacter, typingSpeed);
      } else {
        // Typing complete
        setIsComplete(true);
        clearInterval(cursorTimer);
        setShowCursor(false);
        
        // Wait a bit, then start fade out
        completeTimer = setTimeout(() => {
          setFadeOut(true);
          
          // Complete loading after fade out
          fadeTimer = setTimeout(() => {
            onLoadingComplete();
          }, fadeOutDuration);
        }, pauseAfterTyping);
      }
    };

    // Start typing after a short delay
    const startTimer = setTimeout(typeNextCharacter, 300);

    // Cleanup function
    return () => {
      clearTimeout(startTimer);
      clearTimeout(typingTimer);
      clearInterval(cursorTimer);
      clearTimeout(completeTimer);
      clearTimeout(fadeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-slate-900 flex items-center justify-center z-50 transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Animated logo/icon */}
        <div className="mb-8 relative">
          <div className="relative w-20 h-20 mx-auto">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 rounded-full border-2 border-teal-400/30 animate-spin" style={{ animationDuration: '3s' }}></div>
            
            {/* Inner spinning ring */}
            <div className="absolute inset-2 rounded-full border-2 border-blue-400/50 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
            
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Code2 className="w-8 h-8 text-teal-400 animate-pulse" />
            </div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-teal-400/20 animate-pulse"></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 -left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-0 -right-4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Typing text effect */}
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
            {displayText}
            <span 
              className={`inline-block w-0.5 h-8 sm:h-10 lg:h-12 bg-teal-400 ml-1 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-100`}
            ></span>
          </h1>
          
          {/* Subtitle that appears after typing */}
          <div className={`transition-all duration-500 ${
            isComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-lg text-gray-300 mb-2">Software Engineer</p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <span>Building innovative solutions</span>
              <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
              <span>One line of code at a time</span>
            </div>
          </div>
        </div>

        {/* Loading progress indicator */}
        <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-blue-400 to-teal-400 h-1 rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${Math.min((displayText.length / fullText.length) * 100, 100)}%` 
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;