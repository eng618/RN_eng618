import { SectionList, StyleSheet, Text, Linking, View } from 'react-native';
import Data from './data.json';

const ProjectsList = () => {
  return (
    <>
      <SectionList
        style={styles.container}
        sections={Data}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.url} onPress={() => Linking.openURL(item.url)}>
              {item.url}
            </Text>
          </View>
        )}
      />
    </>
  );
};

export default ProjectsList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 0,
  },
  description: {
    color: '#F5F5F5',
  },
  header: {
    backgroundColor: 'black',
    color: '#9C8BFF',
    fontSize: 32,
    padding: 16,
  },
  item: {
    backgroundColor: '#333333',
    marginVertical: 8,
    padding: 16,
  },
  title: {
    color: '#F5F5F5',
    fontSize: 18,
    fontWeight: 'bold',
  },
  url: {
    color: '#FFA38B',
  },
});
