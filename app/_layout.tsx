import React from 'react';
import { Slot } from 'expo-router';
import { ThemeProviderWrapper } from '@/modules/shared/ThemeProvider';

export default function App() {

  return (
    <ThemeProviderWrapper>
      <Slot />
    </ThemeProviderWrapper>
  );
}
