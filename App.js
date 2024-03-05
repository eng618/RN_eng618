import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.hero]}>Eric Garcia</Text>
      <Text style={styles.text}>eng618</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#505050",
    alignItems: "center",
    justifyContent: "center",
  },
  hero: {
    fontSize: 24,
  },
  text: {
    color: "#9C8BFF",
  },
});
