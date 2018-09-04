import { Alert } from 'react-native';
import Toast from 'react-native-root-toast';
import share from '../share';
import { del } from '../actions/diary';
import events from '../events';

const makeDelete = () => {
  const { store } = share;
  const { dispatch } = store;
  const state = store.getState();
  const { input } = state;
  const { date } = input;

  dispatch(del(date));

  // Add a Toast on screen.
  Toast.show('Delete diary success!', {
    duration: Toast.durations.SHORT,
    position: Toast.positions.CENTER,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });

  events.emit('input-back');
};

export default () => {
  Alert.alert(
    '',
    'Are you sure to delete this diary?',
    [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'OK',
        onPress: () => {
          makeDelete();
        },
      },
    ],
    { cancelable: false }
  );
};
