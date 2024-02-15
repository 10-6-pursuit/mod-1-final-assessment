/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 */
function wordsStartingWithCapital(arr) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i][0] === arr[i][0].toUpperCase()) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

/**
 * Calculates the sum of all odd numbers greater than 10 in the given array.
 * @param {number[]} numbersArray - An array of numbers.
 * @returns {number} - The sum of all odd numbers greater than 10.
 * @example
 * sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20])
 * // Returns: 28
 */
function sumOfOddNumbersGreaterThanTen(arr) {
  let sum = 0;
  for(let num of arr) {
    if(num % 2 === 1 && num > 10) {
      sum += num;
    }
  }
  return sum;
}

/**
 * Returns an object containing a count of how many letters are in each word in the given sentence.
 * @param {string} sentence - A string representing a sentence.
 * @returns {Object.<string, number>} - An object where keys are words and values are the counts of letters in each word.
 * @example
 * countLettersInEachWord("The quick brown fox")
 * // Returns: { "The": 3, "quick": 5, "brown": 5, "fox": 3 }
 */
function countLettersInEachWord(str) {
  //if empty string expect empty obj
  if(str.length === 0) {
    return {};
  }

  let obj = {};
  const arr = str.split(" ");
  for (let key of arr) {
    let value = key.length;
    obj[key] = value;
  }
  return obj;
}

module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
