import { Button, Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from '../../../utils/ThemeProvider';
import AppearanceCard from './cards/appearance-card';

const SettingsScreen = ({ navigation }) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Layout style={styles.container}>
      <AppearanceCard />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
