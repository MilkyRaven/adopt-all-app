import React from 'react';
import { Slot } from 'expo-router';
import { ThemeProviderWrapper } from '@/modules/shared/themes/ThemeProviderWrapper';

export default function App() {

  return (
    <ThemeProviderWrapper>
      <Slot />
    </ThemeProviderWrapper>
  );
}
