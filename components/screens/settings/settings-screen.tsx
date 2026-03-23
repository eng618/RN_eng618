import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppearanceCard from './cards/appearance-card';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <AppearanceCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
