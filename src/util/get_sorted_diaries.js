import { sortBy, reverse } from 'lodash';

export default (diaries = []) => reverse(sortBy(diaries, ['date']));
