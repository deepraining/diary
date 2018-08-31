import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Main from './screens/main';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
});

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: () => ({
        title: 'Diary By RN',
        headerStyle: {
          headerTintColor: '#ffffff',
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
