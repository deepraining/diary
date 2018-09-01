import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, View, Fab, Icon } from 'native-base';
import Timeline from 'react-native-timeline-listview';

import share from '../share';

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
  constructor(props) {
    super(props);

    this.onPressAdd = this.onPressAdd.bind(this);
  }

  onPressAdd() {
    const { navigation } = this.props;
    share.inputIsEdit = !1;
    navigation.navigate('Add');
  }

  getContentJsx() {
    const { diaries } = this.props;

    if (!diaries || !diaries.length) return <Text style={styles.title}>No diaries.</Text>;

    const data = diaries.map(item => ({
      time: item.date.slice(5),
      title: item.date,
      description: item.text,
    }));

    return <Timeline data={data} />;
  }

  render() {
    return (
      <Container>
        {this.getContentJsx()}
        <View style={{ flex: 1 }}>
          <Fab style={{ backgroundColor: '#5067FF' }} position="bottomRight" onPress={this.onPressAdd}>
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}
