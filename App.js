import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './components/screens/home-screen';
import { default as customTheme } from './custom-theme.json';
import { ThemeContext } from './utils/ThemeProvider';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    // Eventually we will want to also add support for using the device theme.
    // See: https://reactnative.dev/docs/appearance
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StatusBar style="auto" />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva[theme], ...customTheme }}>
        <SafeAreaView style={styles.container}>
          <HomeScreen style={styles.home} />
        </SafeAreaView>
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#505050',
    flex: 1,
  },
});
