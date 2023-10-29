var addDays = require("date-fns/addDays");

const days = (day) => {
  const result = addDays(new Date(2020, 8, 22), day);
  return `${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`;
};

module.exports = days;
