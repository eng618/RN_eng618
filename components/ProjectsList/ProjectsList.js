import { Button, Card, Layout, Text } from '@ui-kitten/components';
import { Linking, SectionList, StyleSheet } from 'react-native';
import Data from './data.json';

const ProjectsList = () => {
  return (
    <Layout level="2">
      <SectionList
        style={styles.container}
        sections={Data}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <Layout style={styles.header} level="4">
            <Text category="h1" status="primary">
              {title}
            </Text>
          </Layout>
        )}
        renderItem={({ item }) => (
          <Card
            status="primary"
            header={<Text category="h4">{item.title}</Text>}
            footer={
              <Layout>
                <Button onPress={() => Linking.openURL(item.url)} status="primary">
                  {item.title}
                </Button>
              </Layout>
            }
            style={styles.card}
          >
            <Text category="p1">{item.description}</Text>
          </Card>
        )}
      />
    </Layout>
  );
};

export default ProjectsList;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  card: {
    marginTop: 10,
  },
  container: {
    padding: 16,
    paddingTop: 0,
  },
  header: {
    // backgroundColor: 'black',
    padding: 16,
    borderRadius: 10,
  },
});
