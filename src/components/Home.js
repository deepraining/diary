import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Fab, Icon } from 'native-base';
import Timeline from 'react-native-timeline-listview';

import share from '../share';
import { initAdd, initEdit } from '../actions/input';

const styles = StyleSheet.create({
  title: {
    width: '100%',
    marginTop: 50,
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  list: {
    width: '100%',
    height: '100%',
  },
});

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.onPressAdd = this.onPressAdd.bind(this);
    this.onEventPress = this.onEventPress.bind(this);
  }

  onPressAdd() {
    const { navigation } = this.props;
    const { dispatch } = share.store;

    share.inputIsEdit = !1;
    dispatch(initAdd());
    navigation.navigate('Add');
  }

  onEventPress(item) {
    const { navigation } = this.props;
    const { dispatch } = share.store;
    const { title, description } = item;

    share.inputIsEdit = !0;
    dispatch(initEdit(title, description));
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

    return (
      <Container style={styles.container}>
        <Timeline
          data={data}
          circleSize={20}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          rowContainerStyle={{ marginTop: 5, marginBottom: -5 }}
          timeContainerStyle={{ marginTop: -5, minWidth: 52 }}
          detailContainerStyle={{ marginTop: -11, paddingBottom: 20 }}
          timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
          descriptionStyle={{ color: 'gray' }}
          style={styles.list}
          onEventPress={this.onEventPress}
        />
      </Container>
    );
  }

  render() {
    return (
      <Container>
        {this.getContentJsx()}
        <Fab style={{ backgroundColor: '#5067FF' }} position="bottomRight" onPress={this.onPressAdd}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
