import { Button, Card, CardContent, CardHeader, CardTitle, Separator, Text } from '@gv-tech/ui-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProjectsList from '../ProjectsList/ProjectsList';

import { NavigationProp } from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text variant="h1" className="text-primary">
          Eric Garcia
        </Text>
        <Text variant="bodySmall" className="text-primary">
          eng618
        </Text>
        <Text variant="body" style={styles.credo}>
          This is my app. There are many like it, but this one is mine.
        </Text>
      </View>

      <Card style={styles.quickNavCard}>
        <CardHeader>
          <CardTitle>Quick access</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onPress={() => navigation.navigate('About')} style={styles.navButton}>
            About
          </Button>
          <Button onPress={() => navigation.navigate('Posts')} style={styles.navButton}>
            Posts
          </Button>
          <Button onPress={() => navigation.navigate('Settings')} style={styles.navButton}>
            Settings
          </Button>
        </CardContent>
      </Card>

      <Separator />
      <View style={styles.content}>
        <ProjectsList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  credo: {
    padding: 16,
  },
  hero: {
    alignItems: 'center',
    marginTop: 10,
  },
  quickNavCard: {
    margin: 16,
  },
  navButton: {
    marginBottom: 8,
  },
  content: {
    flex: 1,
  },
});

export default HomeScreen;
