import React, { ReactNode } from 'react';
import { ThemeProvider } from '@react-navigation/native';
import { CustomLightTheme, CustomDarkTheme } from './styles';
import { useColorScheme } from 'react-native';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProviderWrapper = ({ children }: ThemeProviderProps) => {
    const scheme = useColorScheme();
    const selectedTheme = scheme === 'light' ? CustomLightTheme : CustomDarkTheme;
    return (
        <ThemeProvider value={selectedTheme}>
            {children}
        </ThemeProvider>
    );
};
