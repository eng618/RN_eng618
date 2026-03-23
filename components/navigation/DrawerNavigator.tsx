import { Text } from '@gv-tech/ui-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { Home, Settings } from 'lucide-react-native';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../utils/ThemeProvider';
import HomeScreen from '../screens/home-screen';
import SettingsScreen from '../screens/settings/settings-screen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { theme } = useContext(ThemeContext);
  const { navigation, state } = props;
  const bg = theme === 'dark' ? '#000' : '#fff';
  const textColor = theme === 'dark' ? '#fff' : '#000';

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: bg }}>
      <View style={styles.drawerHeader}>
        <Text variant="h6" className="text-primary">
          Eric Garcia
        </Text>
        <Text variant="bodySmall" className="text-muted">
          eng618
        </Text>
      </View>
      <DrawerItem
        label="Overview"
        icon={({ color }) => <Home color={color} size={24} />}
        focused={state.index === 0}
        onPress={() => navigation.navigate('Home')}
        activeBackgroundColor={theme === 'dark' ? '#111' : '#f3f4f6'}
        activeTintColor={textColor}
        inactiveTintColor={textColor}
      />
      <DrawerItem
        label="Settings"
        icon={({ color }) => <Settings color={color} size={24} />}
        focused={state.index === 1}
        onPress={() => navigation.navigate('Settings')}
        activeBackgroundColor={theme === 'dark' ? '#111' : '#f3f4f6'}
        activeTintColor={textColor}
        inactiveTintColor={textColor}
      />
    </DrawerContentScrollView>
  );
};

export const DrawerNavigator = () => {
  const { theme } = useContext(ThemeContext);
  const bg = theme === 'dark' ? '#000' : '#fff';
  const textColor = theme === 'dark' ? '#fff' : '#000';

  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: bg,
        },
        headerTintColor: textColor,
        drawerStyle: {
          backgroundColor: bg,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
});
