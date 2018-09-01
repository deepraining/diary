import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import Entry from './src/entry';
import { getDiaries } from './src/storage';

export default class App extends Component {
  state = {
    appIsReady: false,
    storedDiaries: [],
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

      const storedDiaries = await getDiaries();

      this.setState({ appIsReady: true, storedDiaries });
    } catch (e) {
      console.log({ e });

      this.setState({ appIsReady: true });
    }
  }

  render() {
    const { appIsReady, storedDiaries } = this.state;

    if (appIsReady) {
      return <Entry storedDiaries={storedDiaries} />;
    } else {
      return <AppLoading />;
    }
  }
}
