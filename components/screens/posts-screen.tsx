import { Card, CardContent, CardHeader, CardTitle, Text } from '@gv-tech/ui-native';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const fakePosts = [
  {
    id: '1',
    title: 'Managing dotfiles like a pro',
    summary: 'Brief byline from the web portfolio post on dotfiles automation.',
  },
  {
    id: '2',
    title: 'React Native + Design Systems Strategy',
    summary: 'A roadmap for cross-platform UI parity and shared component libraries.',
  },
  {
    id: '3',
    title: 'Building in public: eng618 case study',
    summary: 'Lessons learned from migrating a personal portfolio to native apps.',
  },
];

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={fakePosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Text variant="body">{item.summary}</Text>
            </CardContent>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 12,
  },
});

export default PostsScreen;
