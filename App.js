import React from 'react';
import { StackNavigator } from 'react-navigation';
import Main from './screens/main';

const AppNavigator = StackNavigator({
  Main: { screen: Main },
});

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
