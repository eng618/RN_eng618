import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { ThemeProvider } from '@gv-tech/ui-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft, Menu } from 'lucide-react-native';
import { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AboutScreen from './components/screens/about-screen';
import HomeScreen from './components/screens/home-screen';
import PostsScreen from './components/screens/posts-screen';
import SettingsScreen from './components/screens/settings/settings-screen';
import { ThemeContext } from './utils/ThemeProvider';

const Stack = createNativeStackNavigator();

const IconButton = ({ onPress, children }: { onPress: () => void; children: React.ReactNode }) => (
  <TouchableOpacity onPress={onPress} style={styles.iconButton}>
    {children}
  </TouchableOpacity>
);

const NavigatorContent = () => {
  const { theme } = useContext(ThemeContext);
  const iconColor = theme === 'dark' ? '#fff' : '#000';

  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerStyle: {
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
        },
        headerTintColor: theme === 'dark' ? '#fff' : '#000',
        headerLeft: () => {
          if (route.name === 'Home') {
            return (
              <IconButton onPress={() => navigation.navigate('Settings')}>
                <Menu color={iconColor} size={24} />
              </IconButton>
            );
          }

          return (
            <IconButton onPress={() => navigation.goBack()}>
              <ArrowLeft color={iconColor} size={24} />
            </IconButton>
          );
        },
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Posts" component={PostsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider>
        <SafeAreaProvider>
          <SafeAreaView style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
            <NavigationContainer>
              <NavigatorContent />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dark: {
    backgroundColor: '#000',
  },
  light: {
    backgroundColor: '#fff',
  },
  iconButton: {
    marginRight: 10,
    padding: 6,
  },
});
