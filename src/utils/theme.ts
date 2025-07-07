// Theme utility functions for dark/light mode management

export type Theme = 'light' | 'dark' | 'system';

/**
 * Get the current theme from localStorage or system preference
 */
export const getCurrentTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
    return savedTheme;
  }
  
  return 'system';
};

/**
 * Get the system's preferred color scheme
 */
export const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/**
 * Get the effective theme (resolves 'system' to actual theme)
 */
export const getEffectiveTheme = (theme: Theme): 'light' | 'dark' => {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
};

/**
 * Apply theme to the document
 */
export const applyTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  
  const effectiveTheme = getEffectiveTheme(theme);
  const root = document.documentElement;
  
  // Remove existing theme classes
  root.classList.remove('light', 'dark');
  
  // Add the new theme class
  root.classList.add(effectiveTheme);
  
  // Store the theme preference
  localStorage.setItem('theme', theme);
  
  // Dispatch custom event for theme change
  window.dispatchEvent(new CustomEvent('themechange', { 
    detail: { theme, effectiveTheme } 
  }));
};

/**
 * Toggle between light and dark themes
 */
export const toggleTheme = (currentTheme: Theme): Theme => {
  const effectiveTheme = getEffectiveTheme(currentTheme);
  const newTheme: Theme = effectiveTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  return newTheme;
};

/**
 * Initialize theme on app startup
 */
export const initializeTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  
  const theme = getCurrentTheme();
  const effectiveTheme = getEffectiveTheme(theme);
  const root = document.documentElement;
  
  // Apply theme immediately
  root.classList.remove('light', 'dark');
  root.classList.add(effectiveTheme);
  
  // Store the theme preference
  localStorage.setItem('theme', theme);
  
  return theme;
};

/**
 * Listen for system theme changes
 */
export const watchSystemTheme = (callback: (isDark: boolean) => void): (() => void) => {
  if (typeof window === 'undefined') return () => {};
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleChange = (e: MediaQueryListEvent) => {
    callback(e.matches);
  };
  
  mediaQuery.addEventListener('change', handleChange);
  
  // Return cleanup function
  return () => {
    mediaQuery.removeEventListener('change', handleChange);
  };
};