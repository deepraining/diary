import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Main from './screens/main';

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontSize: 20,
    paddingLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
  },
});

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: () => ({
        headerTitle: <Text style={styles.title}>Diary By RN</Text>,
        headerStyle: {
          backgroundColor: '#6b52ae',
        },
      }),
    },
  },
  {
    cardStyle: styles.card,
  }
);

export default class Entry extends Component {
  render() {
    return <AppNavigator />;
  }
}
