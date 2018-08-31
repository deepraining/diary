import { ADD_DIARY, DELETE_DIARY, REPLACE_DIARY } from '../actions/diary';

export default function diaryReducer(diaries = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DIARY: {
      const newDiaries = [...diaries, payload];

      // storeDiaries(newDiaries);

      return newDiaries;
    }
    case DELETE_DIARY: {
      const newDiaries = diaries.filter(item => item.id !== payload);

      // storeDiaries(newDiaries);

      return newDiaries;
    }
    case REPLACE_DIARY: {
      const { id, diary } = payload;

      const newDiaries = diaries.map(item => {
        if (item.id === id) return diary;

        return item;
      });

      // storeDiaries(newDiaries);

      return newDiaries;
    }
    default:
      return diaries;
  }
}
