import { AsyncStorage } from 'react-native';

const diariesKey = '@senntyou:diaries';

export async function storeDiaries(diaries = []) {
  console.info('storage.storeDiaries: ', diaries);

  try {
    await AsyncStorage.setItem(diariesKey, JSON.stringify(diaries));

    console.info('storage.storeDiaries success');

    return { success: !0 };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function getDiaries() {
  try {
    const value = await AsyncStorage.getItem(diariesKey);

    console.info('storage.getDiaries: ', value);

    return value ? JSON.parse(value) : [];
  } catch (error) {
    return [];
  }
}
