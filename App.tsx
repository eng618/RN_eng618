import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider, IconRegistry, Icon, IconElement, useTheme, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from './components/screens/home-screen';
import SettingsScreen from './components/screens/settings/settings-screen';
import { default as customTheme } from './custom-theme.json';
import { ThemeContext } from './utils/ThemeProvider';

const Stack = createNativeStackNavigator();

const MenuIcon = (): IconElement => {
  const theme = useTheme();
  return <Icon name="menu-outline" style={{ width: 24, height: 24 }} fill={theme['text-basic-color']} />;
};

const BackIcon = (): IconElement => {
  const theme = useTheme();
  return <Icon name="arrow-back" style={{ width: 24, height: 24 }} fill={theme['text-basic-color']} />;
};

const NavigatorContent = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerStyle: {
          backgroundColor: theme['background-basic-color-1'],
        },
        headerTintColor: theme['text-basic-color'],
        headerLeft: () => {
          if (route.name === 'Home') {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ marginRight: 10 }}>
                <MenuIcon />
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 10 }}>
              <BackIcon />
            </TouchableOpacity>
          );
        },
      })}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Overview',
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva[theme], ...customTheme }}>
        <Layout style={styles.container}>
          <NavigationContainer>
            <NavigatorContent />
          </NavigationContainer>
        </Layout>
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
