import React from 'react';

/**
 * ThemeContext is used to get the current set theme, and toggle method for the application.
 */
export const ThemeContext = React.createContext({
  theme: 'dark',
  toggleTheme: () => {},
});
