import * as React from 'react';
import type { Theme } from '@react-navigation/native';

export  const ThemeContext = React.createContext<Theme | undefined>(undefined);
