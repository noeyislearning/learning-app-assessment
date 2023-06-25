/**
 * TITLE:
 * Pass data to a function with parameters
 */

/**
 * 
 * @param {*} value 
 * @returns value formatted as US currency
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
const formatter = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value);
}

/**
 * 
 * @param {*} sum 
 * @param {*} percent 
 * @returns console.log() output of sum, percent, tip, and total
 */
const calculator = (sum, percent, locale, currency) => {
  let tip = sum * percent;
  let total = sum + tip;

  console.log(`
    Sum: ${formatter(sum, locale, currency)}
    Percent: ${percent} or ${percent * 100}%
    Tip: ${formatter(tip, locale, currency)}
    Total: ${formatter(total, locale, currency)}
  `);
}

// Output
calculator(5, .2, 'en-US', 'USD');