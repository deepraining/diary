import { Alert } from 'react-native';
import share from '../share';
import { add, replace } from '../actions/diary';
import makeDiary from '../util/make_diary';

export default () => {
  const { store } = share;
  const state = store.getState();
  const { input, dispatch } = state;
  const { text, isEdit, date } = input;

  if (!text) {
    Alert.alert('Note', 'Input text could not be empty.');
    return;
  }

  if (isEdit) dispatch(replace(date, makeDiary(text, date)));
  else dispatch(add(makeDiary(text)));
};
