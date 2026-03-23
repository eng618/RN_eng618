import { Button, Card, CardFooter, CardHeader, CardTitle } from '@gv-tech/ui-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from '../../../../utils/ThemeProvider';

const AppearanceCard = () => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Card style={styles.card}>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button onPress={themeContext.toggleTheme}>Toggle Theme</Button>
      </CardFooter>
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
