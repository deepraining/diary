import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './containers/Home';
import Add from './containers/Add';

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
  },
});

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Home,
      navigationOptions: () => ({
        headerTitle: <Text style={styles.title}>Diary By React Native</Text>,
        headerStyle: {
          backgroundColor: '#5067FF',
        },
      }),
    },
    Add: {
      screen: Add,
      navigationOptions: () => ({
        headerTitle: 'Add a diary',
        headerStyle: {
          backgroundColor: '#5067FF',
        },
      }),
    },
  },
  {
    cardStyle: styles.card,
  }
);

export default AppNavigator;
