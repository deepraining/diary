import { INIT_INPUT, UPDATE_INPUT } from '../actions/input';

export default function inputReducer(input = { isEdit: !1, date: '', text: '' }, action) {
  const { type, payload } = action;

  switch (type) {
    case INIT_INPUT: {
      return payload;
    }
    case UPDATE_INPUT: {
      return { ...input, text: payload };
    }
    default:
      return input;
  }
}
