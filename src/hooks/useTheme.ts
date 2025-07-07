import { useState, useEffect } from 'react';
import { 
  Theme, 
  getCurrentTheme, 
  applyTheme, 
  toggleTheme as toggleThemeUtil,
  watchSystemTheme,
  getEffectiveTheme
} from '../utils/theme';

/**
 * Custom hook for managing theme state and operations
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize with current theme from localStorage or system
    if (typeof window !== 'undefined') {
      return getCurrentTheme();
    }
    return 'light';
  });
  
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return getEffectiveTheme(getCurrentTheme());
    }
    return 'light';
  });

  // Apply theme changes
  useEffect(() => {
    const newEffectiveTheme = getEffectiveTheme(theme);
    setEffectiveTheme(newEffectiveTheme);
    
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(newEffectiveTheme);
    }
  }, [theme]);

  // Watch for system theme changes when using system theme
  useEffect(() => {
    if (theme !== 'system') return;

    const cleanup = watchSystemTheme((isDark) => {
      const newEffectiveTheme = isDark ? 'dark' : 'light';
      setEffectiveTheme(newEffectiveTheme);
      
      if (typeof window !== 'undefined') {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(newEffectiveTheme);
      }
    });

    return cleanup;
  }, [theme]);

  /**
   * Set a specific theme
   */
  const setThemeMode = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    const newTheme = toggleThemeUtil(theme);
    setTheme(newTheme);
  };

  /**
   * Check if current theme is dark
   */
  const isDark = effectiveTheme === 'dark';

  /**
   * Check if current theme is light
   */
  const isLight = effectiveTheme === 'light';

  return {
    theme,
    effectiveTheme,
    isDark,
    isLight,
    setTheme: setThemeMode,
    toggleTheme,
  };
};