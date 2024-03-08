import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={[styles.text, styles.hero]}>Eric Garcia</Text>
      <Text style={styles.text}>eng618</Text>
      <Text style={styles.body}>
        This is my app. There are many like it, but this one is mine.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#505050",
    alignItems: "center",
    justifyContent: "top",
  },
  hero: {
    fontSize: 24,
  },
  text: {
    color: "#9C8BFF",
  },
  body: {
    color: "#fff",
    padding: 10,
    margin: 10,
  },
});
