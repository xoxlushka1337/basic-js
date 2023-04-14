const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
// date instanceof Date
// getSeason();
function getSeason(date) {
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  } else {
    if (Object.getOwnPropertyNames(date).length !== 0) {
      throw new Error('Invalid date!');
    }
    if (date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)) {
      if (date.toISOString().split('T')[0] == new Date().toISOString().split('T')[0]) {
        throw new Error('Invalid date!');
      } else {
        if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
          return 'winter';
        }
        if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
          return 'spring';
        }
        if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
          return 'summer';
        }
        if (date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
          return 'autumn ';
        }
      }
    } else {
      throw new Error('Invalid date!');
    }
  }
}

module.exports = {
  getSeason,
};
