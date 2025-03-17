import React, { ReactNode } from 'react';
import { ThemeProvider, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProviderWrapper = ({ children }: ThemeProviderProps) => {
    const scheme = useColorScheme();
    const selectedTheme = scheme === 'light' ? DefaultTheme : DarkTheme;
    return (
        <ThemeProvider value={selectedTheme}>
            {children}
        </ThemeProvider>
    );
};
