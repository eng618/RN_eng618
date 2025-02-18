import { Divider, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProjectsList from '../ProjectsList/ProjectsList';

import { NavigationProp } from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <Layout level="1" style={styles.flexOne}>
      <View style={styles.hero}>
        <Text status="primary" category="h1">
          Eric Garcia
        </Text>
        <Text status="primary" category="s2">
          eng618
        </Text>
        <Text style={styles.credo} category="s2">
          This is my app. There are many like it, but this one is mine.
        </Text>
      </View>
      <Divider />
      <Layout level="2" style={styles.flexOne}>
        <ProjectsList />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  credo: {
    padding: 16,
  },
  hero: {
    alignItems: 'center',
    fontSize: 24,
    marginTop: 10,
  },
});

export default HomeScreen;
