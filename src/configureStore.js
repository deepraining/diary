import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const enhancer = applyMiddleware(thunk);

export default initialState => createStore(rootReducer, initialState, enhancer);
