// 🏃🏼🏊🏼🏋🏼🏄🏼

/**
 * Filters people array based on total number of letters in their name (including spaces).
 * Filter if name is strictly greater than length
 *
 * @param {string[]} people
 * @param {number} length
 * @returns {string[]} filtered array
 */
function filterByLength(people, length) {
  return people.filter(person => person.length > length);
}

/**
 * Returns an array of every nth person.
 * Note that counting starts at 0,
 * so the returned array will always include (at least) the first person.
 *
 * @param  {string[]} people
 * @param  {number} n
 * @returns {string[]}
 *
 * @example
 *    everyNPerson(['Matt', 'Kim', 'Kanye', 'Obama', 'Hans'], 2)
 *    // → ['Matt', 'Kanye', 'Hans']
 */
function everyNPerson(people, n) {
  if (!n) {
    return people;
  }
  const returnedArray = [];
  people.forEach(person => {
    if (people.indexOf(person) % n === 0) {
      returnedArray.push(person);
    }
  });
  return returnedArray;
}

/**
 * Returns an array where each entry is the person's intials
 * @param {string[]} people
 * @returns {string[]} intials array
 *
 * @example
 *    initials(['Kanye West', 'Barack Obama'])
 *    // → ['KW', 'BO']
 */
function initials(people) {
  const returnedArray = [];
  let create = '';
  people.forEach(person => {
    create += person[0];
    create += person[person.indexOf(' ') + 1];
    returnedArray.push(create);
    create = '';
  });
  return returnedArray;
}

/**
 * Returns an array where every person is prepended with their position in the array
 * @param {string[]} people
 * @returns {string[]}
 *
 * @example
 *    peopleWithPosition(['Kanye', 'Barack'])
 *    // → ['1. Kanye', '2. Barack']
 */
function peopleWithPosition(people) {
  const returnedArray = [];
  let create = '';
  people.forEach(person => {
    create += `${people.indexOf(person)}: `;
    create += person;
    returnedArray.push(create);
    create = '';
  });
  return returnedArray;
}

/**
 * Sorts `people` by first name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByFirstName(people) {
  return people.sort();
}

/**
 * Sorts `people` by last name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByLastName(people) {
  let lastNameFirst = [];
  const firstNameFirst = [];
  people.forEach(person => {
    // split the name
    const lastNameSplit = person.split(' ');
    // put last name 1st
    const holder = `${lastNameSplit[1]} ${lastNameSplit[0]}`;
    lastNameFirst.push(holder);
  });
  // theyre now in reverse. sort normally
  lastNameFirst = lastNameFirst.sort();
  // boom sorted
  // now rearrange again
  lastNameFirst.forEach(person => {
    // split
    const lastNameSplit2 = person.split(' ');
    // put last name last
    const holder2 = `${lastNameSplit2[1]} ${lastNameSplit2[0]}`;
    firstNameFirst.push(holder2);
  });
  return firstNameFirst;
}

/**
 * Counts all the characters in the people array (including spaces)
 * @param {Array} people Array of names
 * @return Number of characters
 */
function countTotalCharacters(people) {
  const reducer = (total, current) => total + current.length;
  return people.reduce(reducer, 0);
}

/**
 * Returns `true` if everyone in `people` has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function everyoneHasLetter(people, letter) {
  return people.every(person => person.includes(letter));
}

/**
 * Returns `true` if at least one person has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function someoneHasLetter(people, letter) {
  return people.some(person => person.includes(letter));
}

module.exports = {
  filterByLength,
  everyNPerson,
  initials,
  sortByFirstName,
  sortByLastName,
  countTotalCharacters,
  everyoneHasLetter,
  someoneHasLetter,
  peopleWithPosition
};
