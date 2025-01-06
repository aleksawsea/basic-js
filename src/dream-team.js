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
  let teamName = '';
  let letters = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        const member = members[i].trim();
        letters.push(member[0].toUpperCase());
      }
    }
    letters.sort();
    for (let j = 0; j < letters.length; j++) {
      teamName += letters[j];
    }
  }
  console.log(`${members} - ${letters} - ${teamName}`)
  return teamName;
}

module.exports = {
  createDreamTeam
};
