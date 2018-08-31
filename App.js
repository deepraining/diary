import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import Entry from './src/entry';

export default class App extends Component {
  state = {
    appIsReady: false,
  };

  componentWillMount() {
    this.loadAssets();
  }

  async loadAssets() {
    try {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      });
    } catch (e) {
      console.log({ e });
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    const { appIsReady } = this.state;

    if (appIsReady) {
      return <Entry />;
    } else {
      return <AppLoading />;
    }
  }
}
