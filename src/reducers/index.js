import { combineReducers } from 'redux';

import diaries from './diary';
import input from './input';

export default combineReducers({ diaries, input });
