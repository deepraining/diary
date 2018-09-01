export const UPDATE_INPUT = 'UPDATE_INPUT'; // Update input.
export const INIT_INPUT = 'INIT_INPUT'; // Init input.

export function update(text) {
  return {
    type: UPDATE_INPUT,
    payload: text,
  };
}

export function initAdd() {
  return {
    type: INIT_INPUT,
    payload: { isEdit: !1, text: '' },
  };
}

export function initEdit(date, oldText) {
  return {
    type: INIT_INPUT,
    payload: { isEdit: !0, date, text: oldText },
  };
}
