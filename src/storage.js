import { AsyncStorage } from 'react-native';
import sortBy from 'lodah/sortBy';
import reverse from 'lodah/reverse';

const diariesKey = '@senntyou:diaries';

export async function storeDiaries(diaries = []) {
  const sortedDiaries = reverse(sortBy(diaries, ['date']));

  try {
    await AsyncStorage.setItem(diariesKey, sortedDiaries);
  } catch (error) {
    return {
      error,
      diaries: sortedDiaries,
    };
  }

  return {
    diaries: sortedDiaries,
  };
}

export async function getDiaries() {
  try {
    const value = await AsyncStorage.getItem(diariesKey);

    return value || [];
  } catch (error) {
    return [];
  }
}
