import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Theme } from '../utils/theme';

interface ThemeToggleProps {
  variant?: 'button' | 'dropdown';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  variant = 'button', 
  size = 'md',
  showLabel = false 
}) => {
  const { theme, isDark, setTheme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: 'p-1.5 h-8 w-8',
    md: 'p-2 h-10 w-10',
    lg: 'p-3 h-12 w-12'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  if (variant === 'dropdown') {
    return (
      <div className="relative group">
        <button
          className={`${sizeClasses[size]} rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center`}
        >
          {isDark ? (
            <Moon className={`${iconSizes[size]} text-yellow-500`} />
          ) : (
            <Sun className={`${iconSizes[size]} text-gray-700`} />
          )}
        </button>
        
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-1">
            {(['light', 'dark', 'system'] as Theme[]).map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => setTheme(themeOption)}
                className={`w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 ${
                  theme === themeOption ? 'bg-gray-100 dark:bg-gray-700' : ''
                }`}
              >
                {themeOption === 'light' && <Sun className="h-4 w-4" />}
                {themeOption === 'dark' && <Moon className="h-4 w-4" />}
                {themeOption === 'system' && <Monitor className="h-4 w-4" />}
                <span className="capitalize">{themeOption}</span>
                {theme === themeOption && (
                  <span className="ml-auto text-blue-600 dark:text-teal-400">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${sizeClasses[size]} rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center ${
        showLabel ? 'space-x-2 px-4 w-auto' : ''
      }`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className={`${iconSizes[size]} text-yellow-500`} />
      ) : (
        <Moon className={`${iconSizes[size]} text-gray-700`} />
      )}
      {showLabel && (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;