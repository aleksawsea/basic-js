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
  const numSampleActivity = Number(sampleActivity);
  if (typeof sampleActivity !== 'string') {
    return false;
  } else if (Number.isFinite(numSampleActivity) && numSampleActivity > 0 && numSampleActivity <= 15) {
    const decayConstant = Math.log(2) / HALF_LIFE_PERIOD;
    years = Math.log(MODERN_ACTIVITY / sampleActivity) / decayConstant;
    return Math.ceil(years);
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
