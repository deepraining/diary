import { INIT_INPUT, UPDATE_INPUT, UPDATE_INPUT_DATE } from '../actions/input';

export default function inputReducer(input = { isEdit: !1, date: '', text: '' }, action) {
  const { type, payload } = action;

  switch (type) {
    case INIT_INPUT: {
      return payload;
    }
    case UPDATE_INPUT: {
      return { ...input, text: payload };
    }
    case UPDATE_INPUT_DATE: {
      return { ...input, date: payload };
    }
    default:
      return input;
  }
}
