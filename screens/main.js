import React, { Component } from 'react';
import { Button, Text } from 'native-base';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Diary by React-Native',
  };

  render() {
    return (
      <Button success>
        <Text> Success </Text>
      </Button>
    );
  }
}
