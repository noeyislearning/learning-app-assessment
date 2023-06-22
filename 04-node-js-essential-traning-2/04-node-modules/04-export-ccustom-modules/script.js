let count = 0;

const incrementCount = () => count++;
const decrementCount = () => count--;

const getCount = () => count;

module.exports = {
  incrementCount,
  decrementCount,
  getCount
};