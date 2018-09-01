export const ADD_DIARY = 'ADD_DIARY'; // Add a diary.
export const DELETE_DIARY = 'DELETE_DIARY'; // Delete a diary.
export const REPLACE_DIARY = 'REPLACE_DIARY'; // Replace with a new diary.

export function add(diary) {
  return {
    type: ADD_DIARY,
    payload: diary,
  };
}

export function del(date) {
  return {
    type: DELETE_DIARY,
    payload: date,
  };
}

export function replace(date, diary) {
  return {
    type: REPLACE_DIARY,
    payload: { date, diary },
  };
}
