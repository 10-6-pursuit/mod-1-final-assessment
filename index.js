/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 */
function wordsStartingWithCapital(array) {
  return array.filter(ele => ele[0] === ele[0].toUpperCase());
}

console.log(wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"]));
/**
 * Calculates the sum of all odd numbers greater than 10 in the given array.
 * @param {number[]} numbersArray - An array of numbers.
 * @returns {number} - The sum of all odd numbers greater than 10.
 * @example
 * sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20])
 * // Returns: 28
 */
function sumOfOddNumbersGreaterThanTen(array) {
  return array.reduce((sum, num) => num % 2 && num > 10 ? sum + num : sum, 0)
}

console.log(sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20]));

/**
 * Returns an object containing a count of how many letters are in each word in the given sentence.
 * @param {string} sentence - A string representing a sentence.
 * @returns {Object.<string, number>} - An object where keys are words and values are the counts of letters in each word.
 * @example
 * countLettersInEachWord("The quick brown fox")
 * // Returns: { "The": 3, "quick": 5, "brown": 5, "fox": 3 }
 */
function countLettersInEachWord(string) {
  let obj = {};
  string.split(" ").reduce((acc, ele) => obj[ele] = ele.length, {})
  return obj;
}

console.log(countLettersInEachWord(("The quick brown fox")));

module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
