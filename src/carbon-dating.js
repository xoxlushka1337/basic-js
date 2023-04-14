const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  let activiti = Number(sampleActivity);
  if (isNaN(activiti) || activiti > 15 || activiti <= 0 || activiti / Infinity != 0) {
    return false;
  }
  let a = Math.log(MODERN_ACTIVITY / activiti);
  let age = Math.ceil(a / k);
  return age;
}

module.exports = {
  dateSample
};
