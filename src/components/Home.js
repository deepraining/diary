import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, View, Fab, Icon } from 'native-base';

const styles = StyleSheet.create({
  title: {
    width: '100%',
    marginTop: 50,
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
  },
});

export default class Main extends Component {
  getContentJsx() {
    const { diaries } = this.props;

    if (!diaries || !diaries.length) return <Text style={styles.title}>No diaries.</Text>;
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        {this.getContentJsx()}
        <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => {
              navigation.navigate('Add');
            }}
          >
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}
