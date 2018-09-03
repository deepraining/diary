import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Container, Textarea, View } from 'native-base';
import events from '../events';
import share from '../share';
import { updateDate } from '../actions/input';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  inputWrapper: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  input: {
    width: '100%',
    height: '100%',
    // Textarea has a default marginTop
    marginTop: 0,
  },
  dateWrapper: {
    width: '100%',
    padding: 10,
  },
});

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.onChangeText = this.onChangeText.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  componentDidMount() {
    const { navigation } = this.props;

    events.on('input-back', () => {
      navigation.goBack();
    });
  }

  onChangeText(text) {
    const { update } = this.props;

    update(text);
  }

  onDateChange = date => {
    const { dispatch } = share.store;

    dispatch(updateDate(date));
  };

  render() {
    const { input } = this.props;
    const { text, date, isEdit } = input;

    return (
      <Container style={styles.container}>
        <View style={styles.dateWrapper}>
          <DatePicker
            style={{ width: '100%' }}
            showIcon={false}
            disabled={isEdit}
            date={date}
            mode="date"
            placeholder="Select date"
            format="YYYY-MM-DD"
            customStyles={{
              dateInput: {
                borderWidth: 0,
              },
            }}
            onDateChange={this.onDateChange}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Textarea
            placeholder="Write something ..."
            style={styles.input}
            onChangeText={this.onChangeText}
            value={text}
          />
        </View>
      </Container>
    );
  }
}
