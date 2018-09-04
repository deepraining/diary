import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    width: '100%',
    marginTop: 30,
    fontSize: 24,
    color: '#6b52ae',
    textAlign: 'center',
  },
});

export default class Main extends Component {
  render() {
    return <Text style={styles.title}>No diaries.</Text>;
  }
}
