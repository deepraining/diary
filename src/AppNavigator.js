import React, { Fragment } from 'react';
import { StyleSheet, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './containers/Home';
import Add from './containers/Add';
import share from './share';
import pressAdd from './handler/press_add';
import pressDelete from './handler/press_delete';

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
  },
  action: {
    color: '#ffffff',
    fontSize: 20,
    paddingRight: 15,
  },
  delete: {
    color: '#FFC966',
  },
});

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Home,
      navigationOptions: () => ({
        headerTitle: <Text style={styles.title}>Diary By React Native</Text>,
        headerStyle: {
          backgroundColor: '#5067FF',
        },
      }),
    },
    Add: {
      screen: Add,
      navigationOptions: () => ({
        headerTitle: `${share.inputIsEdit ? 'Edit' : 'Add a'} diary`,
        headerStyle: {
          backgroundColor: '#5067FF',
        },
        headerTintColor: '#fff',
        headerRight: (
          <Fragment>
            {share.inputIsEdit && (
              <Text style={[styles.action, styles.delete]} onPress={pressDelete}>
                Delete
              </Text>
            )}
            <Text style={styles.action} onPress={pressAdd}>
              {share.inputIsEdit ? 'Update' : 'Save'}
            </Text>
          </Fragment>
        ),
      }),
    },
  },
  {
    cardStyle: styles.card,
  }
);

export default AppNavigator;
