const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = '';
    let r = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        r.push(members[i].trim());
      }
    }
    for (let i = 0; i < r.length; i++) {
      arr += r[i].slice(0, 1);
    }
    arr = arr.toUpperCase();
    return arr.split('').sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
