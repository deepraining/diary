import { Alert } from 'react-native';
import Toast from 'react-native-root-toast';
import share from '../share';
import { add, replace } from '../actions/diary';
import makeDiary from '../util/make_diary';
import events from '../events';

export default () => {
  const { store } = share;
  const { dispatch } = store;
  const state = store.getState();
  const { input } = state;
  const { text, isEdit, date } = input;

  if (!text) {
    Alert.alert('Note', 'Input text could not be empty.');
    return;
  }

  if (isEdit) dispatch(replace(date, makeDiary(text, date)));
  else dispatch(add(makeDiary(text)));

  // Add a Toast on screen.
  Toast.show(`${isEdit ? 'Update' : 'Save'} diary success!`, {
    duration: Toast.durations.LONG,
    position: Toast.positions.CENTER,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });

  events.emit('input-back');
};
