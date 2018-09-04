const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const today = `${year}-${month > 9 ? month : `0${month}`}-${day > 9 ? day : `0${day}`}`;

export default {
  today,
};
