import { Slot } from 'expo-router';
import { ThemeProviderWrapper } from '@/modules/shared/themes/ThemeProviderWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { UserProvider } from '@/modules/user/infraestructure/UserContext';

export default function App() {

  return (

    <UserProvider>
      <ThemeProviderWrapper>
        <SafeAreaView style={styles.container}>
          <Slot />
        </SafeAreaView>
      </ThemeProviderWrapper>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
