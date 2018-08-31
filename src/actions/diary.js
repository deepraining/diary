export const ADD_DIARY = 'ADD_DIARY'; // Add a diary.
export const DELETE_DIARY = 'DELETE_DIARY'; // Delete a diary.
export const REPLACE_DIARY = 'REPLACE_DIARY'; // Replace with a new diary.

export function add(diary) {
  return {
    type: ADD_DIARY,
    payload: diary,
  };
}

export function del(id) {
  return {
    type: DELETE_DIARY,
    payload: id,
  };
}

export function replace(id, diary) {
  return {
    type: REPLACE_DIARY,
    payload: { id, diary },
  };
}
