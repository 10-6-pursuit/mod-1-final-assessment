/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 */
function wordsStartingWithCapital(stringsArray) {
  return stringsArray.filter(strings => strings[0] === strings[0].toUpperCase());
}

console.log(wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"]))
/**
 * Calculates the sum of all odd numbers greater than 10 in the given array.
 * @param {number[]} numbersArray - An array of numbers.
 * @returns {number} - The sum of all odd numbers greater than 10.
 * @example
 * sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20])
 * // Returns: 28
 */
function sumOfOddNumbersGreaterThanTen(numbersArray) {
  return numbersArray.reduce((accu, currentVal) => ((currentVal % 2 === 1) && (currentVal > 10)) ? accu+=currentVal : accu, 0);
}

console.log(sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20]))
/**
 * Returns an object containing a count of how many letters are in each word in the given sentence.
 * @param {string} sentence - A string representing a sentence.
 * @returns {Object.<string, number>} - An object where keys are words and values are the counts of letters in each word.
 * @example
 * countLettersInEachWord("The quick brown fox")
 * // Returns: { "The": 3, "quick": 5, "brown": 5, "fox": 3 }
 */
function countLettersInEachWord(string) {
  let arrString = string.split(" ");
  let countObj = {};

  for (let i = 0; i < arrString.length; i++) {
    countObj[arrString[i]] = arrString[i].length;
  }
  return countObj;
}

console.log(countLettersInEachWord("The quick brown fox"));
module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
