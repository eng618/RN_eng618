import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hero}>Eric Garcia</Text>
      <Text>eng618</Text>
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
});
