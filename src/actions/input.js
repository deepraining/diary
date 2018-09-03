import data from '../data';

export const UPDATE_INPUT = 'UPDATE_INPUT'; // Update input.
export const INIT_INPUT = 'INIT_INPUT'; // Init input.
export const UPDATE_INPUT_DATE = 'UPDATE_INPUT_DATE'; // Update input date.

export function update(text) {
  return {
    type: UPDATE_INPUT,
    payload: text,
  };
}

export function initAdd() {
  return {
    type: INIT_INPUT,
    payload: { isEdit: !1, date: data.today, text: '' },
  };
}

export function initEdit(date, oldText) {
  return {
    type: INIT_INPUT,
    payload: { isEdit: !0, date, text: oldText },
  };
}

export function updateDate(date) {
  return {
    type: UPDATE_INPUT_DATE,
    payload: date,
  };
}
