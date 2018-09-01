import { Alert } from 'react-native';
import { ADD_DIARY, DELETE_DIARY, REPLACE_DIARY } from '../actions/diary';
import { storeDiaries } from '../storage';
import getSortedDiaries from '../util/get_sorted_diaries';

export default function diaryReducer(diaries = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DIARY: {
      const newDiaries = [...diaries, payload];
      const sortedDiaries = getSortedDiaries(newDiaries);

      storeDiaries(sortedDiaries).then(({ success }) => {
        if (!success) Alert.alert('Error', 'Error occurred when saving diaries.');
      });

      return sortedDiaries;
    }
    case DELETE_DIARY: {
      const newDiaries = diaries.filter(item => item.date !== payload);
      const sortedDiaries = getSortedDiaries(newDiaries);

      storeDiaries(sortedDiaries).then(({ success }) => {
        if (!success) Alert.alert('Error', 'Error occurred when saving diaries.');
      });

      return sortedDiaries;
    }
    case REPLACE_DIARY: {
      const { date, diary } = payload;

      const newDiaries = diaries.map(item => {
        if (item.date === date) return diary;

        return item;
      });
      const sortedDiaries = getSortedDiaries(newDiaries);

      storeDiaries(sortedDiaries).then(({ success }) => {
        if (!success) Alert.alert('Error', 'Error occurred when saving diaries.');
      });

      return sortedDiaries;
    }
    default:
      return diaries;
  }
}
