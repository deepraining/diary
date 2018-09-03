import share from '../share';
import data from '../data';

export default (date = data.today) => {
  const { store } = share;
  const state = store.getState();
  const { diaries } = state;

  if (!diaries || !diaries.length) return null;

  const result = diaries.find(item => item.date === date);

  return result || null;
};
