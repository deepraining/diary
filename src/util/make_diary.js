import data from '../data';

const { today } = data;

export default (text, date = today) => {
  if (!text) throw new Error("Input text can't be empty.");
  if (!date) throw new Error("Input date can't be empty.");
  if (date.length !== 10) throw new Error('Input date requires "2018-09-01" format.');

  return {
    text,
    date,
  };
};
