import React, { useState } from "react";

export type Theme = 1 | 2 | 3;

interface ThemeProps {
  theme: Theme;
  setTheme: Function;
}

const ThemeContext = React.createContext<ThemeProps>({ theme: 1, setTheme: () => {} });

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(1);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
