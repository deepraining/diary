import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Textarea } from 'native-base';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
});

export default class Add extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Textarea rowSpan={5} bordered placeholder="Write something..." />
      </Container>
    );
  }
}
