import { Card, CardContent, CardHeader, CardTitle, Text } from '@gv-tech/ui-native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <CardHeader>
          <CardTitle>About Eric Garcia</CardTitle>
        </CardHeader>
        <CardContent>
          <Text variant="body">
            Eric is a full-stack software engineer focused on building experience-first products, open source component
            systems, and developer tooling. This screen mirrors the web portfolio narrative from `eng618.github.io`.
          </Text>
          <View style={styles.section}>
            <Text variant="h2">Skills</Text>
            <Text variant="body">React, React Native, TypeScript, Node.js, UI/UX, Accessibility, Cloud</Text>
          </View>
          <View style={styles.section}>
            <Text variant="h2">Values</Text>
            <Text variant="body">Clean code, strong testing, design-consistency, ownership, continuous learning</Text>
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  section: {
    marginTop: 16,
  },
});

export default AboutScreen;
