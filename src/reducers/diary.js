import { Alert } from 'react-native';
import { ADD_DIARY, DELETE_DIARY, REPLACE_DIARY } from '../actions/diary';
import { storeDiaries } from '../storage';

export default function diaryReducer(diaries = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DIARY: {
      const newDiaries = [...diaries, payload];

      const result = storeDiaries(newDiaries);

      if (!result.error) return result.diaries;
      else {
        Alert.alert('Error', 'Error occurred when saving diaries, please try once again.');
        return diaries;
      }
    }
    case DELETE_DIARY: {
      const newDiaries = diaries.filter(item => item.date !== payload);

      const result = storeDiaries(newDiaries);

      if (!result.error) return result.diaries;
      else {
        Alert.alert('Error', 'Error occurred when deleting diary, please try once again.');
        return diaries;
      }
    }
    case REPLACE_DIARY: {
      const { date, diary } = payload;

      const newDiaries = diaries.map(item => {
        if (item.date === date) return diary;

        return item;
      });

      const result = storeDiaries(newDiaries);

      if (!result.error) return result.diaries;
      else {
        Alert.alert('Error', 'Error occurred when saving diaries, please try once again.');
        return diaries;
      }
    }
    default:
      return diaries;
  }
}
