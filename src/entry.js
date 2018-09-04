import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppNavigator from './AppNavigator';
import share from './share';

export default class Entry extends Component {
  constructor(props) {
    super(props);

    const { storedDiaries } = this.props;

    this.store = configureStore({ diaries: storedDiaries });

    share.store = this.store;
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigator />
      </Provider>
    );
  }
}
