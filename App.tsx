import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './components/screens/home-screen';
import SettingsScreen from './components/screens/settings/settings-screen';
import { default as customTheme } from './custom-theme.json';
import { ThemeContext } from './utils/ThemeProvider';

const Stack = createNativeStackNavigator();

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
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva[theme], ...customTheme }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
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
