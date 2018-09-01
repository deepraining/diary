import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppNavigator from './AppNavigator';
import share from './share';
import { getDiaries } from './storage';

const storedDiaries = getDiaries();

const store = configureStore({ diaries: storedDiaries });

share.store = store;

export default class Entry extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
