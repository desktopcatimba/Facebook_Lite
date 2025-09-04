import * as React from 'react';
import { ThemeContext } from './ThemeContext'; // o que tu já tem

type Props = {
  value?: ReactNavigation.Theme | undefined;
  children: React.ReactNode;
};

export function ThemeProvider({ value, children }: Props) {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
