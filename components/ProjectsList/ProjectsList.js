import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle, Text } from '@gv-tech/ui-native';
import { Linking, SectionList, StyleSheet, View } from 'react-native';
import Data from './data.json';

const ProjectsList = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={Data}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.header}>
            <Text variant="h1" className="text-primary">
              {title}
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Text variant="body">{item.description}</Text>
            </CardContent>
            <CardFooter>
              <Button onPress={() => Linking.openURL(item.url)}>{item.title}</Button>
            </CardFooter>
          </Card>
        )}
      />
    </View>
  );
};

export default ProjectsList;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
  },
  header: {
    padding: 16,
    borderRadius: 10,
  },
});
