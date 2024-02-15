/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 */
function wordsStartingWithCapital(arr) {
  return arr.filter(word => word[0] === word[0].toUpperCase());


  
}
console.log(wordsStartingWithCapital(["Apple", "Banana", "Cat"]))
console.log(wordsStartingWithCapital(["apple", "banana", "cat"]))
console.log(wordsStartingWithCapital(["Apple", "banana", "Cat"]))
console.log(wordsStartingWithCapital([]));
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
    if (arr[i] > 10 && arr[i] % 2 !== 0) {
      sum += arr[i];
      
    }

  }
  return sum;
}
console.log(sumOfOddNumbersGreaterThanTen([5, 12, 15, 20]));
console.log(sumOfOddNumbersGreaterThanTen([3, 8, 9, 10]));
console.log(sumOfOddNumbersGreaterThanTen([]));
console.log(sumOfOddNumbersGreaterThanTen([2, 4, 6, 8]));
console.log(sumOfOddNumbersGreaterThanTen([11, 12, 13, 14, 15]));

/**
 * Returns an object containing a count of how many letters are in each word in the given sentence.
 * @param {string} sentence - A string representing a sentence.
 * @returns {Object.<string, number>} - An object where keys are words and values are the counts of letters in each word.
 * @example
 * countLettersInEachWord("The quick brown fox")
 * // Returns: { "The": 3, "quick": 5, "brown": 5, "fox": 3 }
 */
function countLettersInEachWord(str) {
  let letterCount = {}
  for (let str of strs) { 
    str.split(" ") 
    
  }
  return letterCount;

  
  
  
  
  // return str.split(" ").reduce((acc, word) => { acc[word] = word.length}

  
  }

module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
