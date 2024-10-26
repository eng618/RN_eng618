import { Button, Card, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from '../../../../utils/ThemeProvider';

const AppearanceCard = () => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Card header={<Text category="h4">Appearance</Text>} style={styles.card}>
      <Button style={{ margin: 20 }} onPress={themeContext.toggleTheme}>
        Toggle Theme
      </Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    marginTop: 10,
    width: '95%',
  },
});

export default AppearanceCard;
