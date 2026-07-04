import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'professional';
  });

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return [theme, toggleTheme];
};
