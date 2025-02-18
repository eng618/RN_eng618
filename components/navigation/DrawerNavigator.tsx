import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon, IconElement, Layout, Text, useTheme } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/home-screen';
import SettingsScreen from '../screens/settings/settings-screen';

const Drawer = createDrawerNavigator();

interface IconProps {
  color: string;
}

const HomeIcon = ({ color }: IconProps): IconElement => <Icon name="home-outline" style={styles.icon} fill={color} />;

const SettingsIcon = ({ color }: IconProps): IconElement => (
  <Icon name="settings-2-outline" style={styles.icon} fill={color} />
);

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const theme = useTheme();
  const { navigation, state } = props;

  return (
    <DrawerContentScrollView {...props}>
      <Layout style={styles.drawerHeader} level="1">
        <Text category="h6" status="primary">
          Eric Garcia
        </Text>
        <Text category="s2" appearance="hint">
          eng618
        </Text>
      </Layout>
      <DrawerItem
        label="Overview"
        icon={({ color }) => <HomeIcon color={color} />}
        focused={state.index === 0}
        onPress={() => navigation.navigate('Home')}
        activeBackgroundColor={theme['background-basic-color-2']}
        activeTintColor={theme['text-primary-color']}
        inactiveTintColor={theme['text-basic-color']}
      />
      <DrawerItem
        label="Settings"
        icon={({ color }) => <SettingsIcon color={color} />}
        focused={state.index === 1}
        onPress={() => navigation.navigate('Settings')}
        activeBackgroundColor={theme['background-basic-color-2']}
        activeTintColor={theme['text-primary-color']}
        inactiveTintColor={theme['text-basic-color']}
      />
    </DrawerContentScrollView>
  );
};

export const DrawerNavigator = () => {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme['background-basic-color-1'],
        },
        headerTintColor: theme['text-basic-color'],
        drawerStyle: {
          backgroundColor: theme['background-basic-color-1'],
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Overview',
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  drawerHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
});
