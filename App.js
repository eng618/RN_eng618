import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ProjectsList from './components/ProjectsList/ProjectsList';

export default function App() {
  return (
    <SafeAreaView style={styles.window}>
      <StatusBar style="auto" />
      <Text style={[styles.hero]}>Eric Garcia</Text>
      <Text style={styles.text}>eng618</Text>
      <Text style={styles.credo}>This is my app. {'\n'}There are many like it, but this one is mine.</Text>
      <ProjectsList />
    </SafeAreaView>
  );
}

// App colors
// Background Color (#505050)
// Accent Color (#9C8BFF)
// Lighter Accent Color (#BDAEFF)
// Darker Accent Color (#695DD6)
// Complementary Color (#FFA38B)

// Text color options
// White (#FFFFFF) - For main body text on dark backgrounds, this will provide strong contrast and readability.
// Light Grey (#CCCCCC) - For secondary text or labels, this color can provide a softer contrast with the background while still maintaining readability.
// Off-White (#F5F5F5) - Another option for body text on dark backgrounds, offering a slightly warmer tone compared to pure white.
// Dark Grey (#333333) - For text on lighter backgrounds or as an alternative to pure black for better readability and contrast.

const styles = StyleSheet.create({
  credo: {
    color: '#F5F5F5',
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
  },
  hero: {
    alignItems: 'center',
    color: '#9C8BFF',
    fontSize: 24,
  },
  text: {
    color: '#9C8BFF',
  },
  window: {
    alignItems: 'center',
    backgroundColor: '#505050',
    flex: 1,
    justifyContent: 'top',
  },
});
