import { Slot } from 'expo-router';
import { ThemeProviderWrapper } from '@/modules/shared/themes/ThemeProviderWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function App() {

  return (
    <ThemeProviderWrapper>
      <SafeAreaView style={styles.container}>
        <Slot />
      </SafeAreaView>
    </ThemeProviderWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});