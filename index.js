/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 * .sort maybe
 * 
 * initialize new arr to return capitalizedLetter word
 * for loop to iterate through input arr
 * if statement to check if input arr first letter is capitlized
 * return new arr
 
 */


function wordsStartingWithCapital(stringsArray ) {
  let capitalizedWords = [];
    for (let i = 0; i < stringsArray.length; i++) {
      if (stringsArray[i][0] === stringsArray[i][0].toUpperCase()) {
        capitalizedWords.push(stringsArray[i])
      }
    }
    return capitalizedWords;
}
console.log(wordsStartingWithCapital["Apple", "banana", "Cat", "dog"]);
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
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0 && arr[i] > 10) {
        sum += arr[i];
      }
    }
    return sum;
}
console.log(sumOfOddNumbersGreaterThanTen([5, 12, 15, 20]));
// /**
//  * Returns an object containing a count of how many letters are in each word in the given sentence.
//  * @param {string} sentence - A string representing a sentence.
//  * @returns {Object.<string, number>} - An object where keys are words and values are the counts of letters in each word.
//  * @example
//  * countLettersInEachWord("The quick brown fox")
//  * // Returns: { "The": 3, "quick": 5, "brown": 5, "fox": 3 }
//  */
function countLettersInEachWord(sentenceStr) {
  let count = {};
  for (let letter of sentenceStr) {
    if (count[key])
      sentenceStr.split(' ');
    }
return count;
}
console.log(countLettersInEachWord("Hello world"));

module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
