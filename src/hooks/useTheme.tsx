import { useEffect } from 'react';
import { useThemeStore } from '../stores/themeStore';


const useTheme = () => {
  const { theme, toggleTheme, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('no-transition');
    
    if (theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    
    setTimeout(() => {
      root.classList.remove('no-transition');
    }, 50);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
